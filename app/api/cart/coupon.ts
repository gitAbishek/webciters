import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const postBodyParser = z.object({
  cart_guid: z.string(),
  discount_code: z.string(),
});

export const postCoupon = createMutation({
  path: "/cart/coupon",
  method: "post",
  bodyParser: postBodyParser,
  responseParser: errorOr({}),
  withAuthToken: false,
});
