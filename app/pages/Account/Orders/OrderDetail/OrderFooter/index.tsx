import { OrderLinesAndAddressWrapper } from "./styled";
import { OrderLines } from "./OrderLines";
import { Addresses } from "./Addresses";
import { Order } from "~/schema/order";

type Props = {
  order: Order;
};

export function OrderFooter({ order }: Props) {
  return (
    <OrderLinesAndAddressWrapper>
      <OrderLines order={order} />
      <Addresses order={order} />
    </OrderLinesAndAddressWrapper>
  );
}
