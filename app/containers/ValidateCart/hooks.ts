import { useFetcher } from "@remix-run/react";
import { ROUTE_DATA_VALIDATE_CART } from "~/utils/constants";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";

export function useValidateCart(onSuccess: () => void) {
  const fetcher = useFetcher();

  useFetcherNotifier(fetcher, onSuccess);

  return {
    validate() {
      fetcher.submit({}, { action: ROUTE_DATA_VALIDATE_CART, method: "post" });
    },
    isLoading: fetcher.state === "loading",
  };
}
