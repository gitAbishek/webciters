import { z } from "zod";
import { createMutation } from "~/api/utils.server";

export const post = createMutation({
  withAuthToken: true,
  method: "post",
  path: "/user/logout",
  bodyParser: z.object({}),
  responseParser: z.object({}),
});
