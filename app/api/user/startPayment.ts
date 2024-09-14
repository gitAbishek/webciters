import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const postCartValidateBody = z.object({
  cart_guid: z.string(),
  user_ip_address: z.string(),
});

export const postCartStartPayment = createMutation({
  method: "post",
  path: "/user/cart/start_payment",
  bodyParser: postCartValidateBody,
  responseParser: errorOr({
    redirect_url: z.string(),
  }),
  withAuthToken: true,
});
