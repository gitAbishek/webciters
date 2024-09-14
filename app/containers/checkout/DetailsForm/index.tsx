import { useState } from "react";
import { withZod } from "@remix-validated-form/with-zod";
import { useControlField, ValidatedForm } from "remix-validated-form";
import { Heading } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { SubmitBtn } from "./styled";
import { EditAndAddAddressPopup } from "~/containers/checkout/DetailsForm/Popups/EditAndAddAddressPopup";
import { AddressesPopup } from "~/containers/checkout/DetailsForm/Popups/AddressesPopup";
import { AddressWithDefault } from "~/schema/address";
import { getTypedFields } from "~/components/Form";
import { formInputSchema } from "~/containers/checkout/DetailsForm/schema";
import {
  FORM_ID_CHECKOUT_DETAILS,
  GENDER_RADIO_FIELDS,
  ROUTE_DATA_CART_DETAILS_FORM,
} from "~/utils/constants";
import { ContactInfo } from "~/schema/contactInfo";
import { AddressesPicker } from "~/containers/checkout/DetailsForm/AddressesPicker";
import { UserCart } from "~/schema/cart";
import { Fetcher } from "~/utils/types";

const { TextField, RadioFields } = getTypedFields(formInputSchema);

const validator = withZod(formInputSchema);

type Props = {
  addresses: AddressWithDefault[];
  contactInfo: ContactInfo;
  fetcher: Fetcher;
  userCart: UserCart;
};

export function CartDetailsForm({
  addresses,
  contactInfo,
  fetcher,
  userCart,
}: Props) {
  const [activeAddressesPopup, setActiveAddressesPopup] = useState<
    "delivery_address_guid" | "billing_address_guid" | null
  >(null);

  const [activeAddressId, setActiveAddressId] = useState<"new" | string | null>(
    null
  );

  const default_delivery = addresses.find(
    (address) => address.default_delivery_address
  );
  const default_billing = addresses.find(
    (address) => address.default_billing_address
  );

  const [deliveryAddressGuid, setDeliveryAddressGuid] = useControlField<
    string | undefined
  >("delivery_address_guid", FORM_ID_CHECKOUT_DETAILS);

  const [billingAddressGuid, setBillingAddressGuid] = useControlField<
    string | undefined
  >("billing_address_guid", FORM_ID_CHECKOUT_DETAILS);
  return (
    <>
      <ValidatedForm
        id={FORM_ID_CHECKOUT_DETAILS}
        fetcher={fetcher}
        action={ROUTE_DATA_CART_DETAILS_FORM}
        validator={validator}
        method="post"
        defaultValues={{
          ...contactInfo,
          delivery_address_guid:
            userCart.delivery_address?.guid || default_delivery?.guid,
          billing_address_guid:
            userCart.billing_address?.guid || default_billing?.guid,
        }}
      >
        <Stack gap={3} direction="column">
          <Heading as="h3" variant="md" weight="semi-bold">
            Persoonlijke gegevens
          </Heading>
          <RadioFields name="gender" items={GENDER_RADIO_FIELDS} />
          <TextField label="Voornaam" name="first_name" />
          <TextField label="E-mail" name="email" disabled />
          <TextField label="Tussenvoegsel" name="prefix_surname" />
          <TextField label="Achternaam" name="surname" />
          <TextField label="Telefoonnummer" name="telephone" />

          <AddressesPicker
            title="Leveringsadres"
            addresses={addresses}
            onChange={setDeliveryAddressGuid}
            value={deliveryAddressGuid}
            name="delivery_address_guid"
            onEdit={() => setActiveAddressesPopup("delivery_address_guid")}
            onNew={() => setActiveAddressId("new")}
          />

          <AddressesPicker
            title="Factuuradres"
            addresses={addresses}
            onChange={setBillingAddressGuid}
            value={billingAddressGuid}
            name="billing_address_guid"
            onEdit={() => setActiveAddressesPopup("billing_address_guid")}
            onNew={() => setActiveAddressId("new")}
          />
        </Stack>
        <Stack justify="flex-end">
          <SubmitBtn size="sm">Volgende stap</SubmitBtn>
        </Stack>
      </ValidatedForm>

      {renderPopup()}
    </>
  );

  function renderPopup() {
    const handleClosePopup = () => {
      setActiveAddressesPopup(null);
    };

    if (activeAddressId) {
      return (
        <EditAndAddAddressPopup
          addresses={addresses}
          onSetActiveAddressId={setActiveAddressId}
          activeAddressId={activeAddressId}
        />
      );
    }

    if (activeAddressesPopup === "billing_address_guid") {
      return (
        <AddressesPopup
          name="billing_address_guid"
          handleClosePopup={handleClosePopup}
          addresses={addresses}
          handleSetActiveAddressId={setActiveAddressId}
          value={billingAddressGuid}
          onChange={setBillingAddressGuid}
        />
      );
    }

    if (activeAddressesPopup === "delivery_address_guid") {
      return (
        <AddressesPopup
          name="delivery_address_guid"
          handleClosePopup={handleClosePopup}
          addresses={addresses}
          handleSetActiveAddressId={setActiveAddressId}
          value={deliveryAddressGuid}
          onChange={setDeliveryAddressGuid}
        />
      );
    }

    return null;
  }
}
