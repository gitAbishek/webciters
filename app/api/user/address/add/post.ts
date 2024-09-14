import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { address } from "~/schema/address";
import { errorOr } from "~/schema/helpers";

const bodyParser = address
  .omit({
    default_delivery_address: true,
    default_billing_address: true,
    guid: true,
  })
  .and(
    z.object({
      country_code_iso: z.literal("NL"),
    })
  );

export const post = createMutation({
  path: "/user/address/add",
  withAuthToken: true,
  bodyParser,
  responseParser: errorOr({}),
  method: "post",
});
