import { Address } from "~/schema/address";
import { Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";

type Props = {
  address: Address;
};

export function AccountAddressList({ address }: Props) {
  const { house_number, house_number_appendix, postal_code, street, city } =
    address;

  return (
    <Stack direction="column" gap={2}>
      <Text variant="md" mt={2}>
        {street} {house_number} {house_number_appendix}
      </Text>
      <Text variant="md">
        {postal_code} {city}
      </Text>
    </Stack>
  );
}
