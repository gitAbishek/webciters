import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { address } from "~/schema/address";
import { firstItemOrNull } from "~/schema/helpers";

const responseShape = z.array(address).transform(firstItemOrNull);

export const get = createQuery({
  path: "/user/address/default_billing_address",
  withAuthToken: true,
  responseShape,
});
