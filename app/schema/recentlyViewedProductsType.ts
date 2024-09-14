import { z } from "zod";
import { simplifiedProduct } from "~/schema/product";

export const recentlyViewedProducts = z.array(simplifiedProduct);

export type RecentlyViewedProductsType = z.infer<typeof recentlyViewedProducts>;
