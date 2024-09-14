import { Stack } from "~/components/Stack";
import { OrderLine } from "~/components/OrderLine";
import { LinkArrowButton } from "~/components/ArrowButton";
import { StackSpacingLg } from "./styled";
import { compilePath } from "~/utils/path";
import { ROUTE_ACCOUNT_ORDER_INVOICE } from "~/utils/constants";
import { Order } from "~/schema/order";

const getInvoicePath = compilePath(ROUTE_ACCOUNT_ORDER_INVOICE);

type Props = {
  order: Order;
};

export function OrderLines({ order }: Props) {
  const invoiceId = order.invoices[0]?.guid;

  return (
    <StackSpacingLg gap={4} direction="column" flex={1}>
      <Stack gap={1} direction="column">
        <OrderLine name="Verzendkosten" value={order.shipping_costs} />
        {order.discounts.map((discount) => (
          <OrderLine
            key={discount.description}
            name={discount.description}
            value={discount.price}
          />
        ))}
      </Stack>
      <OrderLine name="Totaal" value={order.total_amount_incl_tax} big bold />
      {invoiceId && (
        <LinkArrowButton
          to={getInvoicePath({ invoiceId })}
          target="_blank"
          color="primary"
        >
          Download factuur
        </LinkArrowButton>
      )}
    </StackSpacingLg>
  );
}
