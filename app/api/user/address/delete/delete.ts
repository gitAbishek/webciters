import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const bodyParser = z.object({
  guid: z.string(),
});

export const del = createMutation({
  path: "/user/address/delete",
  withAuthToken: true,
  bodyParser,
  responseParser: errorOr({}),
  method: "delete",
});
