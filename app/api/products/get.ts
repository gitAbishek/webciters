import { z } from "zod";
import { createQuery } from "~/api/utils.server";

export const get = createQuery({
  path: "/products/:id",
  withAuthToken: false,
  responseShape: z.void(),
});
