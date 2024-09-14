import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { simplifiedProduct } from "~/schema/product";

export const getSearch = createQuery({
  path: "/search",
  withAuthToken: false,
  responseShape: z.array(simplifiedProduct),
});
