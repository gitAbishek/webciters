import { useFetcher, useFetchers } from "@remix-run/react";
import { useRootData } from "~/root";
import { ROUTE_DATA_WISHLIST_FAVORITE } from "~/utils/constants";
import {
  wishlistFormInput,
  WishlistFormInput,
} from "~/containers/WishlistFavorite/schema";

export function useWishlistProductFetcher(guid: string) {
  const { wishlistIds } = useWishlistFetcher();

  const fetcher = useFetcher();

  return {
    setIsFavorite,
    isFavorite: wishlistIds.includes(guid),
  };

  function setIsFavorite(isFavorite: boolean) {
    const method = isFavorite ? "post" : "delete";
    const submitData: WishlistFormInput = {
      spli_guid: guid,
    };

    fetcher.submit(submitData, {
      action: ROUTE_DATA_WISHLIST_FAVORITE,
      method,
    });
  }
}

export function useWishlistFetcher() {
  const { wishlistIds } = useRootData();
  const fetchers = useFetchers();
  const fetcher = useFetcher();

  return { wishlistIds: getOptimistic(), setIsFavorite };

  function setIsFavorite(guid: string, isFavorite: boolean) {
    const method = isFavorite ? "post" : "delete";
    const submitData: WishlistFormInput = {
      spli_guid: guid,
    };

    fetcher.submit(submitData, {
      action: ROUTE_DATA_WISHLIST_FAVORITE,
      method,
    });
  }

  function getOptimistic() {
    return fetchers.reduce((currentList, currentFetcher) => {
      if (
        !currentFetcher.submission ||
        ROUTE_DATA_WISHLIST_FAVORITE !== currentFetcher.submission.action
      ) {
        return currentList;
      }

      const parsed = wishlistFormInput.safeParse(
        currentFetcher.submission.formData
      );

      if (!parsed.success) return currentList;

      if (currentFetcher.submission.method === "POST") {
        return [...currentList, parsed.data.spli_guid];
      }
      return currentList.filter((id) => id !== parsed.data.spli_guid);
    }, wishlistIds);
  }
}
