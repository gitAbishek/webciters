import { EditableDataBox } from "~/components/EditableDataBox";
import { Text } from "~/components/Typography";
import { AccountAddressList } from "~/components/AccountAddressList";
import { Stack } from "~/components/Stack";
import { ContactInfoWrapper, GridWrapper } from "./styled";
import { AccountContactInfoList } from "~/components/AccountContactInfoList";
import { Order } from "~/schema/order";
import { formatAsCurrency } from "~/utils/number";

type Props = {
  order: Order;
};

export function OrderData({ order }: Props) {
  const isShippingFree = order.shipping_costs === 0;

  return (
    <Stack direction="column" gap={6}>
      <EditableDataBox>
        <ContactInfoWrapper>
          <div>
            <Text variant="md" weight="semi-bold" mb={1}>
              Contactinformatie
            </Text>
            <AccountContactInfoList contactInfo={order.customer_info} />
          </div>
          {order.delivery_address && (
            <div>
              <Text variant="md" weight="semi-bold" mb={1}>
                Afleveradres
              </Text>
              <AccountAddressList address={order.delivery_address} />
            </div>
          )}
          {order.billing_address && (
            <div>
              <Text variant="md" weight="semi-bold" mb={1}>
                Factuuradres
              </Text>
              <AccountAddressList address={order.billing_address} />
            </div>
          )}
        </ContactInfoWrapper>
      </EditableDataBox>
      <GridWrapper>
        <EditableDataBox>
          <Text variant="md" weight="semi-bold" mb={1}>
            Verzending
          </Text>
          <Text variant="sm" weight="semi-bold">
            {order.shipping_method}
          </Text>
          <Text variant="sm" mb={1}>
            {order.shipping_method_subtitle}
          </Text>
          <Text variant="sm" color={isShippingFree ? "green" : undefined}>
            Verzendkosten:{" "}
            {isShippingFree ? "Gratis" : formatAsCurrency(order.shipping_costs)}
          </Text>
        </EditableDataBox>
        <EditableDataBox>
          <Text variant="md" weight="semi-bold" mb={1}>
            Betaalwijze
          </Text>
          <Text variant="sm">{order.payment_method}</Text>
        </EditableDataBox>
      </GridWrapper>
    </Stack>
  );
}
