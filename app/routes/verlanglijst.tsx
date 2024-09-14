import { Wishlist } from "~/pages/Wishlist";
import { get as getWishlist } from "~/api/user/wishlist/get";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { recentlyViewedWishlist } from "~/utils/recentlyViewed";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);
  const recentlyViewedProducts = await recentlyViewedWishlist(session);

  try {
    return {
      wishlist: await getWishlist(session, {}),
      ...recentlyViewedProducts,
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type WishlistPageData = Awaited<ReturnType<typeof loader>>;

export default Wishlist;
