import { useRootData } from "~/root";

export function usePaymentMethods() {
  return useRootData().paymentMethods;
}
