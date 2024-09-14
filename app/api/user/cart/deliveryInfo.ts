import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { result } from "~/schema/helpers";

const postDeliveryBody = z.object({
  cart_guid: z.string(),
  delivery_address_guid: z.string(),
  billing_address_guid: z.string(),
});

export const postDeliveryInfo = createMutation({
  withAuthToken: true,
  bodyParser: postDeliveryBody,
  responseParser: result,
  path: "/user/cart/delivery_info",
  method: "post",
});
