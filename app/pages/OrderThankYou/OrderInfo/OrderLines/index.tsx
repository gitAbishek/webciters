import { OrderLine } from "~/components/OrderLine";
import { Stack } from "~/components/Stack";
import { Order } from "~/schema/order";

type Props = {
  order: Order;
};

export function OrderLines({ order }: Props) {
  return (
    <Stack gap={4} direction="column" mt={4}>
      <hr />
      <Stack gap={1} direction="column">
        <OrderLine name="Verzendkosten" value={order.shipping_costs} bold />
        {order.discounts.map((discount) => (
          <OrderLine
            key={`${discount.description}${discount.price}`}
            name={`Korting ${discount.description}`}
            value={discount.price}
            bold
          />
        ))}
      </Stack>
      <hr />
      <OrderLine
        name="Totaal (incl. btw)"
        value={order.total_amount_incl_tax}
        bold
        big
      />
    </Stack>
  );
}
