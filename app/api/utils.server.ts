import { z } from "zod";
import { Session } from "@remix-run/node";
import { getToken } from "~/utils/auth";
import { compilePath, ExtractRouteParams } from "~/utils/path";
import {
  IsUnAuthenticated,
  NotFound,
  NovuloIsUpdating,
  ResponseParsingFailed,
  UnhandledResponseCode,
} from "~/api/errors";
import { getRequiredEnv } from "~/utils/env";

/* eslint-disable no-console */

type MutationProps<
  Path extends string,
  BodyParser extends z.ZodTypeAny,
  ResponseParser extends z.ZodTypeAny
> = {
  method: "post" | "delete" | "put" | "patch";
  path: Path;
  withAuthToken: boolean;
  bodyParser: BodyParser;
  responseParser: ResponseParser;
  debug?: boolean;
};

export function createMutation<
  Path extends string,
  BodyParser extends z.ZodTypeAny,
  ResponseParser extends z.ZodTypeAny
>({
  method,
  withAuthToken,
  path,
  bodyParser,
  responseParser,
  debug = false,
}: MutationProps<Path, BodyParser, ResponseParser>) {
  const getPath = compilePath(path);

  return async function mutation(
    session: Session,
    body: z.input<BodyParser>,
    pathParams: ExtractRouteParams<Path>
  ) {
    const url = getRequiredEnv("NOVULO_REST_API") + getPath(pathParams);

    // Novulo does not accept specified fields, this makes sure all extraneous fields will be removed.
    const parsedBody = bodyParser.parse(body);

    let headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (withAuthToken) {
      headers = await addRequiredAuthorization(url, session, headers);
    }

    const config = {
      method,
      headers,
      body: JSON.stringify(parsedBody),
    };
    console.log("config file", config);

    const resp = await fetch(url, config);

    console.info(`mutation ${url}`, resp.status);

    await handleGenericEdgeCases(url, config, resp);

    if (resp.status === 200) {
      const jsonParsedContent = await resp.json();

      if (debug) {
        console.log(
          "Raw json response\n",
          JSON.stringify(jsonParsedContent, null, 4)
        );
      }

      const parseResult = await responseParser.safeParseAsync(
        jsonParsedContent
      );

      if (!parseResult.success) {
        throw new ResponseParsingFailed(
          parseResult.error,
          jsonParsedContent,
          url,
          config,
          resp
        );
      }

      return parseResult.data as z.infer<ResponseParser>;
    }

    throw new UnhandledResponseCode(url, config, resp);
  };
}

type QueryProps<Path extends string, ResponseSchema extends z.ZodTypeAny> = {
  path: Path;
  responseShape: ResponseSchema;
  withAuthToken: boolean;
  debug?: boolean;
};

export function createQuery<
  Path extends string,
  ResponseShape extends z.ZodTypeAny
>({
  withAuthToken,
  path,
  responseShape,
  debug = false,
}: QueryProps<Path, ResponseShape>) {
  const getPath = compilePath(path);

  return async function query(
    session: Session,
    pathParams: ExtractRouteParams<Path>,
    urlSearchParams?: URLSearchParams
  ) {
    const searchParams = urlSearchParams ? `?${urlSearchParams}` : "";
    const url =
      getRequiredEnv("NOVULO_REST_API") + getPath(pathParams) + searchParams;

    let headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (withAuthToken) {
      headers = await addRequiredAuthorization(url, session, headers);
    }

    const config = {
      method: "get",
      headers,
    };

    const resp = await fetch(url, config);

    console.info(`query ${url}`, resp.status);

    await handleGenericEdgeCases(url, config, resp);

    if (resp.status === 200) {
      const jsonParsedContent = await resp.json();

      if (debug) {
        console.log(
          "Raw json response\n",
          JSON.stringify(jsonParsedContent, null, 4)
        );
      }

      const parseResult = await responseShape.safeParseAsync(jsonParsedContent);

      if (!parseResult.success) {

        console.log("what am i getting wrong", parseResult, "hitting url", url);
        throw new ResponseParsingFailed(
          parseResult.error,
          jsonParsedContent,
          url,
          config,
          resp
        );
      }

      return parseResult.data as z.infer<ResponseShape>;
    }

    throw new UnhandledResponseCode(url, config, resp);
  };
}

async function handleGenericEdgeCases(
  url: string,
  config: RequestInit,
  response: Response
) {
  const isResponseJson =
    response.headers.get("content-type") === "application/json; charset=utf-8";

  if (response.status === 200 && !isResponseJson) {
    throw new NovuloIsUpdating(url, config, response);
  }

  // Unauthorized
  if (response.status === 401) {
    throw new IsUnAuthenticated(url, config, response);
  }

  if (response.status === 404) {
    throw new NotFound(url, config, response);
  }

  if (response.status === 400) {
    throw new NotFound(url, config, response);
  }
}

async function addRequiredAuthorization(
  url: string,
  session: Session,
  headers: Record<string, string>
) {
  const token = await getToken(session);

  if (!token) {
    throw new IsUnAuthenticated(url, {}, null);
  }

  return {
    ...headers,
    UserAuthorization: `Bearer ${token}`,
  };
}

type FileMutationProps<Path extends string> = {
  path: Path;
};

export function createFileMutation<Path extends string>({
  path,
}: FileMutationProps<Path>) {
  const getPath = compilePath(path);

  return async function fileMutation(
    session: Session,
    pathParams: ExtractRouteParams<Path>
  ) {
    const url = getRequiredEnv("NOVULO_REST_API") + getPath(pathParams);

    // Novulo does not accept specified fields, this makes sure all extraneous fields will be removed.

    let headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    headers = await addRequiredAuthorization(url, session, headers);

    const token = await getToken(session);

    const body = {
      token,
    };

    const config = {
      method: "post",
      headers,
      body: JSON.stringify(body),
    };

    const response = await fetch(url, config);

    console.info(`file mutation ${url}`, response.status);

    console.log(response);
    // Unauthorized
    if (response.status === 401) {
      throw new IsUnAuthenticated(url, config, response);
    }

    if (response.status === 400) {
      throw new NotFound(url, config, response);
    }

    if (response.status === 404) {
      throw new NotFound(url, config, response);
    }

    if (response.status === 200) {
      console.log(response);
      return response;
    }

    throw new UnhandledResponseCode(url, config, response);
  };
}
