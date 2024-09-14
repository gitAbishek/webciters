import { Heading, Text } from "~/components/Typography";
import { Slider } from "~/components/Slider";
import { AddressPicker } from "~/containers/checkout/DetailsForm/AddressPicker";
import { PlusIcon } from "~/components/Icon";
import { FormError } from "~/components/Form/FormError";
import { ArrowButton } from "~/components/ArrowButton";
import { AddressWithDefault } from "~/schema/address";
import { NewAddressButton } from "./styled";
import { Stack } from "~/components/Stack";

type Props = {
  title: string;
  addresses: AddressWithDefault[];
  name: "delivery_address_guid" | "billing_address_guid";
  value?: string;
  onChange: (value: string) => void;
  onNew: () => void;
  onEdit: () => void;
};

export function AddressesPicker({
  title,
  addresses,
  name,
  value,
  onChange,
  onNew,
  onEdit,
}: Props) {
  return (
    <>
      <Heading as="h3" variant="md" weight="semi-bold" mb={1} mt={4}>
        {title}
      </Heading>
      <Slider spacing={2} hasOffset={false}>
        {addresses.map((address) => (
          <AddressPicker
            key={address.guid}
            name={name}
            address={address}
            value={value}
            onChange={onChange}
          />
        ))}
        <Stack flex={1}>
          <NewAddressButton type="button" onClick={onNew}>
            <PlusIcon size="md" color="primary" />
            <Text variant="md" weight="medium" color="primary">
              Voeg adres toe
            </Text>
          </NewAddressButton>
        </Stack>
      </Slider>
      <FormError name="delivery_address_guid" />
      <ArrowButton color="primary" onClick={onEdit}>
        Wijzig gegevens
      </ArrowButton>
    </>
  );
}
