import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { result } from "~/schema/helpers";

const postDeliveryMethodBody = z.object({
  cart_guid: z.string(),
  delivery_option_id: z.number(),
});

export const postDeliveryMethod = createMutation({
  withAuthToken: true,
  bodyParser: postDeliveryMethodBody,
  method: "post",
  path: "/user/cart/delivery_method",
  responseParser: result,
});
