import { Fragment } from "react";
import {
  AddAddressButton,
  ButtonFw,
  StackScrollable,
  StackPadding,
} from "./styled";
import { Text } from "~/components/Typography";
import { PlusIcon } from "~/components/Icon";
import { AddressPicker } from "~/containers/checkout/DetailsForm/AddressPicker";
import { ArrowButton } from "~/components/ArrowButton";
import { AddressWithDefault } from "~/schema/address";
import { Popup } from "~/components/Popup";

type Props = {
  handleClosePopup: () => void;
  handleSetActiveAddressId: (addressId: string | null) => void;
  addresses: AddressWithDefault[];
  name: string;
  onChange: (v: string) => void;
  value?: string;
};

export function AddressesPopup({
  handleClosePopup,
  addresses,
  handleSetActiveAddressId,
  name,
  value,
  onChange,
}: Props) {
  return (
    <Popup handleClosePopup={handleClosePopup} title="Kies je adres">
      <StackScrollable gap={4} direction="column">
        <AddAddressButton
          type="button"
          onClick={() => handleSetActiveAddressId("new")}
        >
          <PlusIcon size="md" color="primary" />
          <Text variant="md" weight="medium" color="primary">
            Voeg adres toe
          </Text>
        </AddAddressButton>
        {addresses.map((address) => (
          <Fragment key={address.guid}>
            <AddressPicker
              address={address}
              name={name}
              isInPopup
              onChange={onChange}
              value={value}
            />
            <ArrowButton
              onClick={() => handleSetActiveAddressId(address.guid)}
              color="primary"
            >
              Wijzig adres
            </ArrowButton>
          </Fragment>
        ))}
      </StackScrollable>
      <StackPadding
        gap={4}
        direction="row"
        justify="space-between"
        align="center"
      >
        <ButtonFw type="button" variant="outline" onClick={handleClosePopup}>
          Terug
        </ButtonFw>
      </StackPadding>
      {/* </ValidatedForm> */}
    </Popup>
  );
}
