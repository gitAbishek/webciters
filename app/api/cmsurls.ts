import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { page, redirect } from "~/schema/cms";
import { firstItemOrNull } from "~/schema/helpers";

// const responseShape = z.array(page.or(redirect)).transform(firstItemOrNull);

// cmsResponse expects object instead array 
// added few more validation success error httpcode

const cmsResponse = z.object({
  success: z.boolean(),
  error: z.nullable(z.string()),
  httpcode: z.number(),         
  response: z.array(page.or(redirect)).transform(firstItemOrNull),
});


export const getCmsUrls = createQuery({
  path: "/cmsurls",
  responseShape: cmsResponse.transform((data) => data.response),
  withAuthToken: false,
});
