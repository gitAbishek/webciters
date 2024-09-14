import { z } from "zod";
import { createMutation } from "~/api/utils.server";

const bodyParser = z.object({
  old_password: z.string(),
  new_password: z.string(),
  new_password_repeated: z.string(),
});

const responseParser = z.discriminatedUnion("success", [
  z.object({
    success: z.literal(true),
  }),
  z.object({
    success: z.literal(false),
    error: z.string(),
  }),
]);

export const changePassword = createMutation({
  withAuthToken: true,
  path: "/user/change_password",
  method: "post",
  bodyParser,
  responseParser,
});
