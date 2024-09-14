import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { result } from "~/schema/helpers";

const postCartValidateBody = z.object({
  cart_guid: z.string(),
});

export const postCartValidate = createMutation({
  method: "post",
  path: "/cart/validate_stock",
  bodyParser: postCartValidateBody,
  responseParser: result,
  withAuthToken: false,
});
