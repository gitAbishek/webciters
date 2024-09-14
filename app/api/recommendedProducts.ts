import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { simplifiedProduct } from "~/schema/product";

export const getRecommendedProducts = createQuery({
  path: "/recommended_products/:spli_guid",
  responseShape: z.object({
    products: z.array(simplifiedProduct),
  }),
  withAuthToken: false,
});
