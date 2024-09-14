import { useLoaderData, useSubmit, useFetcher } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { useRef } from "react";
import { EditableDataBox } from "~/components/EditableDataBox";
import { AccountAddressOverviewPageData } from "~/routes/account/voorkeuren/adressen";
import { Stack } from "~/components/Stack";
import { compilePath } from "~/utils/path";
import {
  ROUTE_ACCOUNT_PREFERENCES_ADDRESS_DETAIL,
  ROUTE_ACCOUNT_PREFERENCES_ADDRESS_NEW,
} from "~/utils/constants";
import { AccountAddressList } from "~/components/AccountAddressList";
import { RadioField } from "~/components/Form/RadioFields/RadioField";
import { AddAddressButton, AddAddressIcon, RadioWrapper } from "./styled";
import {
  DeleteFormInputSchema,
  formInputSchema,
} from "~/pages/Account/Preferences/AddressOverview/schema";
import { Heading } from "~/components/Typography";
import { useSubmitNotifier } from "~/containers/SubmitNotifier/hooks";

const getDetailPath = compilePath(ROUTE_ACCOUNT_PREFERENCES_ADDRESS_DETAIL);

const validator = withZod(formInputSchema);

export function AccountAddressOverview() {
  const submit = useSubmit();
  const fetcher = useFetcher();
  useSubmitNotifier({ state: fetcher.state, data: fetcher.data });

  const formRef = useRef<HTMLFormElement>(null);
  const { addresses } = useLoaderData<AccountAddressOverviewPageData>();

  const defaultDeliveryAddress = addresses.find(
    (address) => address.default_delivery_address
  );

  const defaultBillingAddress = addresses.find(
    (address) => address.default_billing_address
  );

  return (
    <>
      <Heading as="h2" mb={6}>
        Adresboek
      </Heading>
      <AddAddressButton
        to={ROUTE_ACCOUNT_PREFERENCES_ADDRESS_NEW}
        variant="secondary"
        size="sm"
      >
        <AddAddressIcon size="md" />
        Nieuw adres toevoegen
      </AddAddressButton>
      <ValidatedForm
        method="post"
        formRef={formRef}
        validator={validator}
        onChange={() => submit(formRef.current)}
        defaultValues={{
          default_billing_address: defaultBillingAddress?.guid,
          default_delivery_address: defaultDeliveryAddress?.guid,
        }}
      >
        <Stack direction="column" spacing={4}>
          {addresses.map((address) => (
            <EditableDataBox
              key={address.guid}
              editLink={{
                label: "Wijzig adres",
                to: getDetailPath({ id: address.guid }),
              }}
              onRemove={() => removeAddress(address.guid)}
            >
              <AccountAddressList address={address} />
              <RadioWrapper>
                <RadioField
                  label="Standaard leveringsadres"
                  name="default_billing_address"
                  value={address.guid}
                />
                <RadioField
                  label="Standaard factuuradres"
                  name="default_delivery_address"
                  value={address.guid}
                />
              </RadioWrapper>
            </EditableDataBox>
          ))}
        </Stack>
      </ValidatedForm>
    </>
  );

  function removeAddress(guid: string) {
    const data: DeleteFormInputSchema = {
      guid,
    };

    fetcher.submit(data, { method: "delete" });
  }
}
