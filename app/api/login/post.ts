import { z } from "zod";
import { createMutation } from "~/api/utils.server";

const bodyParser = z.object({
  username: z.string(),
  password: z.string(),
});

const responseParser = z.discriminatedUnion("success", [
  z.object({
    success: z.literal(true),
    response: z.object({
      response: z.object({
        token: z.string(),
      }),
    }),
  }),
  z.object({ success: z.literal(false), error: z.string() }),
]);

export const loginPost = createMutation({
  path: "/user/login",
  method: "post",
  bodyParser,
  responseParser,
  withAuthToken: false,
});
