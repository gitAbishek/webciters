import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const postRecentlyViewedProductSchema = z.object({
  spli_guid: z.string(),
  website_url: z.string(),
  rvpl_guid: z.string().nullable(),
});

const mutation = {
  method: "post",
  bodyParser: postRecentlyViewedProductSchema,
  responseParser: errorOr({
    rvpl_guid: z.string(),
  }),
} as const;

export const postRecentlyViewedProductNoUser = createMutation({
  ...mutation,
  path: "/nouser/recently_viewed/add",
  withAuthToken: false,
});

export const postRecentlyViewedProduct = createMutation({
  ...mutation,
  path: "/user/recently_viewed/add",
  withAuthToken: true,
});
