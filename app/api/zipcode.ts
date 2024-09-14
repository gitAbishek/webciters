import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

export const postZipcodeBodySchema = z.object({
  house_number: z.number(),
  house_number_appendix: z.string().nullable(),
  postal_code: z.string(),
});

const postZipcodeResponseSchema = errorOr({
  street: z.string(),
  city: z.string(),
});

export const postZipcode = createMutation({
  method: "post",
  path: "/zipcode",
  bodyParser: postZipcodeBodySchema,
  responseParser: postZipcodeResponseSchema,
  withAuthToken: false,
});
