import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const postConfirmCodeSubscriptionBodySchema = z.object({
  email: z.string(),
});

export const postNewsletterSignup = createMutation({
  method: "post",
  path: "/nouser/newsletter_signup",
  withAuthToken: false,
  bodyParser: postConfirmCodeSubscriptionBodySchema,
  responseParser: errorOr({}),
});
