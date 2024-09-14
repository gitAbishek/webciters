import { useLoaderData, useNavigate, useFetcher } from "@remix-run/react";

import { AccountAddressDetailPageData } from "~/routes/account/voorkeuren/adressen/$id";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";
import { AddressForm } from "~/containers/AddressForm";
import { AccountAddressNewPageData } from "~/routes/account/voorkeuren/adressen/nieuw";
import { Heading } from "~/components/Typography";
import { ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW } from "~/utils/constants";

export function AccountAddressDetail() {
  const navigate = useNavigate();

  const { address } = useLoaderData<
    AccountAddressDetailPageData | AccountAddressNewPageData
  >();

  const hasInitialAddress = Object.keys(address).length > 0;

  const fetcher = useFetcher();

  useFetcherNotifier(fetcher, () =>
    navigate(ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW)
  );

  return (
    <>
      <Heading as="h2" mb={6}>
        {hasInitialAddress ? "Wijzig adres" : "Nieuw adres"}
      </Heading>
      <AddressForm
        address={address}
        fetcher={fetcher}
        onCancel={() => navigate(ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW)}
      />
    </>
  );
}
