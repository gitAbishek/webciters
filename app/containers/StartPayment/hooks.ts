import { useFetcher } from "@remix-run/react";
import { ROUTE_DATA_START_PAYMENT } from "~/utils/constants";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";

export function useStartPayment() {
  const fetcher = useFetcher();

  useFetcherNotifier(fetcher);

  return {
    startPayment() {
      fetcher.submit({}, { action: ROUTE_DATA_START_PAYMENT, method: "post" });
    },
    isLoading: fetcher.state === "loading",
  };
}
