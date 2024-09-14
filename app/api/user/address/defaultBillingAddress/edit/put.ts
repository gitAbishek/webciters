import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const bodyParser = z.object({
  guid: z.string(),
});

const responseParser = errorOr({});

export const put = createMutation({
  path: "/user/address/default_billing_address/edit",
  method: "put",
  withAuthToken: true,
  bodyParser,
  responseParser,
});
