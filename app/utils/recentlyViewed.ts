import { Session } from "@remix-run/node";
import {
  postRecentlyViewedProduct,
  postRecentlyViewedProductNoUser,
} from "~/api/recentlyViewedProducts/add";
import { getRequiredEnv } from "~/utils/env";
import { getRecentlyViewedProduct } from "~/api/recentlyViewedProducts";
import { SESSION_RECENTLY_VIEWED_KEY } from "~/utils/constants";
import { hasAuthToken } from "~/utils/auth";

async function getRvlpGuid(session: Session) {
  const value: string | null =
    (await session.get(SESSION_RECENTLY_VIEWED_KEY)) || null;

  return value;
}

async function getPostRecentlyViewedByAuth(session: Session) {
  if (await hasAuthToken(session)) {
    return postRecentlyViewedProduct;
  }

  return postRecentlyViewedProductNoUser;
}

export async function recentlyViewed(session: Session, spli_guid: string) {
  try {
    const currentRvlpGuid = await getRvlpGuid(session);
    const postRecentlyBy = await getPostRecentlyViewedByAuth(session);

    const postRecentlyViewed = await postRecentlyBy(
      session,
      {
        spli_guid,
        website_url: getRequiredEnv("WEBSITE_URL"),
        rvpl_guid: currentRvlpGuid,
      },
      {}
    );

    if (postRecentlyViewed.success) {
      const recentlyViewedProductsAll = await getRecentlyViewedProduct(
        session,
        {
          rvpl_guid: postRecentlyViewed.response.rvpl_guid,
        }
      );

      // Remove current visiting product from the recently viewed products.
      const recentlyViewedProducts = recentlyViewedProductsAll.filter(
        (product) => product.guid !== spli_guid
      );

      return {
        recentlyViewedProducts,
        rvpl_guid: postRecentlyViewed.response.rvpl_guid,
      };
    }
  } catch (error) {
    console.error(error);
  }

  return null;
}

export async function recentlyViewedWishlist(session: Session) {
  try {
    const rvpl_guid = await getRvlpGuid(session);

    if (!rvpl_guid) return null;

    const recentlyViewedProducts = await getRecentlyViewedProduct(session, {
      rvpl_guid,
    });

    return {
      recentlyViewedProducts,
    };
  } catch (error) {
    console.error(error);
  }

  return null;
}
