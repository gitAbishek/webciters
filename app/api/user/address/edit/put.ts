import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { address } from "~/schema/address";
import { errorOr } from "~/schema/helpers";

const bodyParser = address.merge(
  z.object({
    country_code_iso: z.literal("NL"),
  })
);

export const put = createMutation({
  path: "/user/address/edit",
  withAuthToken: true,
  bodyParser,
  responseParser: errorOr({}),
  method: "put",
});
