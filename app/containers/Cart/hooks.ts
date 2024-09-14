import { useFetcher, useFetchers } from "@remix-run/react";

import {
  ActionSubmission,
  LoaderSubmission,
} from "@remix-run/react/dist/transition";
import { useRootData } from "~/root";
import { patchFetchInput, PatchFetchInput } from "~/containers/Cart/schema";
import { ROUTE_DATA_CART } from "~/utils/constants";
import { ObjectValueToString } from "~/utils/types";
import { useSubmitNotifier } from "~/containers/SubmitNotifier/hooks";

const UPDATE_ACTION = { action: ROUTE_DATA_CART, method: "patch" } as const;

export function useCartProduct(id: string) {
  const cart = useCart();
  const { data, state, submit } = useFetcher();

  useSubmitNotifier({
    data,
    state,
    withLoadingToaster: false,
  });

  const maybeProduct = cart?.products.find((product) => product.guid === id);

  const quantity = maybeProduct?.quantity || 0.0;

  return {
    setQuantity,
    quantity,
    increment,
    maybeProduct,
  };

  function increment() {
    setQuantity(quantity + 1);
  }

  function setQuantity(newQuantity: number) {
    const submitData: ObjectValueToString<PatchFetchInput> = {
      new_quantity: `${newQuantity}.0`,
      spli_guid: id,
    };

    submit(submitData, UPDATE_ACTION);
  }
}

export function useCart() {
  const { cart } = useRootData();

  const fetchers = useFetchers();

  return getOptimistic();

  function getOptimistic() {
    if (!fetchers.length || !cart) return cart;

    const optimisticQuantityById = fetchers.reduce((map, fetcher) => {
      if (!fetcher.submission || !isRelevantSubmission(fetcher.submission)) {
        return map;
      }

      const parsed = patchFetchInput.safeParse(fetcher.submission.formData);

      if (!parsed.success) return map;

      return map.set(parsed.data.spli_guid, parsed.data.new_quantity);
    }, new Map<string, number>());

    return {
      ...cart,
      products: cart.products.map((product) => ({
        ...product,
        quantity: optimisticQuantityById.get(product.guid) || product.quantity,
      })),
    };
  }
}

function isRelevantSubmission(submission: ActionSubmission | LoaderSubmission) {
  return (
    UPDATE_ACTION.action === submission.action &&
    UPDATE_ACTION.method.toUpperCase() === submission.method
  );
}
