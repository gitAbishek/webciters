import {
  useLoaderData,
  useNavigate,
  useOutletContext,
  useFetcher,
} from "@remix-run/react";
import { CheckoutDetailPageData } from "~/routes/bestellen/index";
import { CartDetailsForm } from "~/containers/checkout/DetailsForm";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";
import { ROUTE_CHECKOUT_SHIPPING } from "~/utils/constants";
import { CheckoutLayoutOutletContextData } from "~/routes/bestellen";
import { Stack } from "~/components/Stack";

export function Detail() {
  const navigate = useNavigate();
  const { addresses, contactInfo } = useLoaderData<CheckoutDetailPageData>();
  const userCart = useOutletContext<CheckoutLayoutOutletContextData>();

  const fetcher = useFetcher();

  useFetcherNotifier(fetcher, () => navigate(ROUTE_CHECKOUT_SHIPPING));

  return (
    <Stack direction="column">
      <CartDetailsForm
        addresses={addresses}
        contactInfo={contactInfo}
        fetcher={fetcher}
        userCart={userCart}
      />
    </Stack>
  );
}
