import { useFetcher } from "@remix-run/react";
import { ButtonStack, StackScrollable } from "./styled";
import { Text } from "~/components/Typography";
import { ChevronLeftIcon } from "~/components/Icon";
import { Address } from "~/schema/address";
import { AddressForm } from "~/containers/AddressForm";
import { Popup } from "~/components/Popup";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";

type Props = {
  onSetActiveAddressId: (addressId: string | null) => void;
  addresses: Address[];
  activeAddressId: string | null;
};

export function EditAndAddAddressPopup({
  addresses,
  activeAddressId,
  onSetActiveAddressId,
}: Props) {
  const fetcher = useFetcher();

  useFetcherNotifier(fetcher, closePopup);

  const addressInitialValues =
    addresses.find((address) => address.guid === activeAddressId) || {};

  return (
    <Popup
      handleClosePopup={closePopup}
      title={activeAddressId === "new" ? "Adres toevoegen" : "Wijzig adres"}
    >
      <StackScrollable gap={4} direction="column">
        <ButtonStack onClick={closePopup}>
          <ChevronLeftIcon size="sm" color="black" />
          <Text weight="semi-bold" variant="sm">
            Ga terug
          </Text>
        </ButtonStack>
        <AddressForm
          address={addressInitialValues}
          fetcher={fetcher}
          onCancel={closePopup}
        />
      </StackScrollable>
    </Popup>
  );

  function closePopup() {
    onSetActiveAddressId(null);
  }
}
