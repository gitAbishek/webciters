import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { result } from "~/schema/helpers";

const postPaymentDetailsBody = z.object({
  cart_guid: z.string(),
  payment_method: z.string(),
});

export const postPaymentDetails = createMutation({
  responseParser: result,
  path: "/user/cart/payment_details",
  method: "post",
  bodyParser: postPaymentDetailsBody,
  withAuthToken: true,
});
