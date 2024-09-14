import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const postResetPasswordBody = z.object({
  new_password: z.string(),
  new_password_repeated: z.string(),
  reset_token: z.string(),
});

export const postResetPassword = createMutation({
  withAuthToken: false,
  path: "/user/reset_password",
  method: "post",
  bodyParser: postResetPasswordBody,
  responseParser: errorOr({
    user: z.string(),
  }),
});
