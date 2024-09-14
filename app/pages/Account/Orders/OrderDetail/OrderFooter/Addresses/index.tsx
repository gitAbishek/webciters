import { Heading, Text } from "~/components/Typography";
import { AddressesWrapper } from "./styled";
import { Stack } from "~/components/Stack";
import { AccountAddressList } from "~/components/AccountAddressList";
import { Order } from "~/schema/order";

type Props = {
  order: Order;
};

export function Addresses({ order }: Props) {
  return (
    <Stack direction="column" gap={4} flex={1}>
      <Heading as="h3" weight="semi-bold">
        Adres- en betaalgegevens
      </Heading>
      <AddressesWrapper>
        {order.delivery_address && (
          <Stack direction="column" flex={1}>
            <Text variant="md" mb={2} weight="semi-bold">
              Afleveradres
            </Text>
            <AccountAddressList address={order.delivery_address} />
          </Stack>
        )}
        {order.billing_address && (
          <Stack direction="column" flex={1}>
            <Text variant="md" mb={2} weight="semi-bold">
              Factuuradres
            </Text>
            <AccountAddressList address={order.billing_address} />
          </Stack>
        )}
      </AddressesWrapper>
    </Stack>
  );
}
