// eslint-disable-next-line max-classes-per-file
export class ApiError extends Error {
  public readonly responseHeaders;

  public readonly responseStatus;

  constructor(
    public readonly url: string,
    public readonly config: RequestInit,
    response: Response | null,
    message: string
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.config = ApiError.maskVulnerableConfigData(config);

    if (response) {
      this.responseHeaders = Object.fromEntries(response.headers);
      this.responseStatus = `${response.status}: ${response.statusText}`;
    }
    Error.captureStackTrace(this);
  }

  static maskVulnerableConfigData(config: RequestInit) {
    let maskedConfig = config;

    if (config.headers && "Authorization" in config.headers) {
      maskedConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: "*masked*",
        },
      };
    }

    if (config.body && typeof config.body === "string") {
      maskedConfig.body = JSON.stringify(
        JSON.parse(config.body),
        (key, value) => {
          if (key.includes("password")) return "*masked*";
          return value;
        }
      );
    }

    return maskedConfig;
  }
}

export class NovuloIsUpdating extends ApiError {
  constructor(url: string, config: RequestInit, response: Response) {
    super(
      url,
      config,
      response,
      "Content type is not json, novulo is probably updating"
    );
  }
}

export class IsUnAuthenticated extends ApiError {
  constructor(url: string, config: RequestInit, response: Response | null) {
    super(
      url,
      config,
      response,
      "User is not authenticated or authorized to see this resource"
    );
  }
}

export class NotFound extends ApiError {
  constructor(url: string, config: RequestInit, response: Response) {
    super(url, config, response, "We could not find that resource");
  }
}

export class UnhandledResponseCode extends ApiError {
  constructor(url: string, config: RequestInit, response: Response) {
    super(url, config, response, "Status code is not handled");
  }
}

export class ResponseParsingFailed extends ApiError {
  constructor(
    public readonly zodError: Error,
    public readonly responseJSON: unknown,
    url: string,
    config: RequestInit,
    response: Response
  ) {
    super(
      url,
      config,
      response,

      `Response parsing failed, is your response shape correct?`
    );
  }
}
