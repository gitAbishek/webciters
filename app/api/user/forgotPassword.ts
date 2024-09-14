import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const bodyParser = z.object({
  email: z.string(),
});

export const postForgotPassword = createMutation({
  method: "post",
  path: "/user/forgot_password",
  bodyParser,
  responseParser: errorOr({}),
  withAuthToken: false,
});
