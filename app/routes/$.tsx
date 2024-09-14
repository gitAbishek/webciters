import { json, redirect, Session } from "@remix-run/node";
import { CatchValue } from "@remix-run/react/dist/transition";
import { DataFunctionArgs } from "~/utils/types";
import { getCmsUrls } from "~/api/cmsurls";
import { commitSession, getSession } from "~/utils/session";
import { notFound } from "~/utils/responses";
import { CmsPage } from "~/pages/CmsPage";
import { recentlyViewed } from "~/utils/recentlyViewed";
import { SESSION_RECENTLY_VIEWED_KEY } from "~/utils/constants";
import { Page } from "~/schema/cms";

export function meta({ data }: { data: CmsPageData | undefined | CatchValue }) {
  if (!data || "statusText" in data) return undefined;

  // const { meta_title: title, meta_description: description } = data?.page;

  return {
    title:data?.page?.meta_title,
    description:data?.page?.meta_description,
  };
}

export async function processTemplateData(page: Page, session: Session) {
  if (page.page_template_code === "pdp") {
    const spli_guid = page.product_data.guid;
    const recentlyViewedData = await recentlyViewed(session, spli_guid);

    return { page, ...recentlyViewedData };
  }

  return { page };
}

export const loader = async ({ params, request }: DataFunctionArgs) => {
  const session = await getSession(request);

  // if params["*"] is not defined it means we are loading from index.ts
  const path = params["*"]! || "homepage";

  const { searchParams } = new URL(request.url);

  const filters = searchParams.getAll("pt_filters");

  if (filters.length > 0) {
    filters[0]
      .split(",")
      .map((filter) => searchParams.append("filter", filter));
  }
  searchParams.delete("pt_filters");
  searchParams.set("path", path);

  const response = await getCmsUrls(session, {}, searchParams);

  if (!response) {
    throw notFound();
  }

  if (response.response_type === "Redirect (301)") {
    throw redirect(response.redirect_url);
  }

  const processedTemplateData = await processTemplateData(response, session);

  if ("rvpl_guid" in processedTemplateData) {
    session.set(SESSION_RECENTLY_VIEWED_KEY, processedTemplateData.rvpl_guid);

    return json(processedTemplateData, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return processedTemplateData;
};

export type CmsPageData = Awaited<ReturnType<typeof processTemplateData>>;

export default CmsPage;
