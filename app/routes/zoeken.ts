import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { getSearch } from "~/api/search";
import { notFound } from "~/utils/responses";
import { Search } from "~/pages/Search";
import { getRequiredEnv } from "~/utils/env";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (!query) throw notFound();

  const params = new URLSearchParams({
    query,
    website: getRequiredEnv("WEBSITE_URL"),
  });

  try {
    return {
      products: await getSearch(session, {}, params),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type SearchPage = Awaited<ReturnType<typeof loader>>;

export default Search;
