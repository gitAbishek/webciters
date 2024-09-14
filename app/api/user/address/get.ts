import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { address, addressWithDefault } from "~/schema/address";

export const get = createQuery({
  path: "/user-address",
  withAuthToken: true,
  responseShape: z.array(addressWithDefault),
});

export const getDetail = createQuery({
  path: "/user-address/:guid",
  withAuthToken: true,
  responseShape: address,
});
