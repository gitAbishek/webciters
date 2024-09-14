import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { result } from "~/schema/helpers";

const patchNewsletterStatusEditSchema = z.object({
  subscription_status: z.boolean(),
  code: z.string(),
  identificationcode: z.literal(null),
});

export const patchNewsletterStatusEdit = createMutation({
  method: "put",
  path: "/nouser/newsletter_status/edit",
  withAuthToken: false,
  bodyParser: patchNewsletterStatusEditSchema,
  responseParser: result,
});
