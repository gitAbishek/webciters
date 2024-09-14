import { useMatches } from "@remix-run/react";
import { useRootData } from "~/root";
import { ROUTE_CHECKOUT_DETAIL } from "~/utils/constants";

export function useCmsFooterData() {
  const isPaymentFooter = useMatches()[1].pathname === ROUTE_CHECKOUT_DETAIL;
  const paymentFooter = useRootData().cmsPaymentFooter;
  const footer = useRootData().cmsFooter;

  if (isPaymentFooter) return paymentFooter;

  return footer;
}
