import {
  useLoaderData,
  useNavigate,
  useOutletContext,
  useFetcher,
} from "@remix-run/react";
import { CheckoutShippingPageData } from "~/routes/bestellen/verzending";
import { ShippingForm } from "~/containers/checkout/ShippingForm";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";
import { ROUTE_CHECKOUT_PAYMENT } from "~/utils/constants";
import { CheckoutLayoutOutletContextData } from "~/routes/bestellen";

export function Shipping() {
  const navigate = useNavigate();
  const userCart = useOutletContext<CheckoutLayoutOutletContextData>();
  const { deliveryMethods } = useLoaderData<CheckoutShippingPageData>();

  const fetcher = useFetcher();
  useFetcherNotifier(fetcher, () => navigate(ROUTE_CHECKOUT_PAYMENT));

  return (
    <ShippingForm
      currentDeliveryMethod={userCart.shipping}
      deliveryMethods={deliveryMethods}
      fetcher={fetcher}
    />
  );
}
