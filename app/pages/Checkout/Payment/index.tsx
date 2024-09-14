import {
  useLoaderData,
  useNavigate,
  useOutletContext,
  useFetcher,
} from "@remix-run/react";
import { CheckoutPaymentPageData } from "~/routes/bestellen/betaalwijze";
import { PaymentForm } from "~/containers/checkout/PaymentForm";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";
import { ROUTE_CHECKOUT_OVERVIEW } from "~/utils/constants";
import { CheckoutLayoutOutletContextData } from "~/routes/bestellen";

export function Payment() {
  const navigate = useNavigate();
  const userCart = useOutletContext<CheckoutLayoutOutletContextData>();
  const { paymentMethods } = useLoaderData<CheckoutPaymentPageData>();

  const fetcher = useFetcher();

  useFetcherNotifier(fetcher, () => navigate(ROUTE_CHECKOUT_OVERVIEW));

  return (
    <PaymentForm
      fetcher={fetcher}
      paymentMethods={paymentMethods.payment_methods}
      currentPaymentMethod={userCart.payment_details}
    />
  );
}
