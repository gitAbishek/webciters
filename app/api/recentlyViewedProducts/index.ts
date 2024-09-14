import { createQuery } from "~/api/utils.server";
import { recentlyViewedProducts } from "~/schema/recentlyViewedProductsType";

export const getRecentlyViewedProduct = createQuery({
  path: "/recently_viewed_products/:rvpl_guid",
  withAuthToken: false,
  responseShape: recentlyViewedProducts,
});
