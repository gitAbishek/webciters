import { SideBySideOnMd, Content, Sidebar } from "./styled";
import { OrderData } from "./OrderData";
import { Products } from "./Products";
import { OrderLines } from "./OrderLines";
import { Order } from "~/schema/order";

type Props = {
  order: Order;
};

export function OrderInfo({ order }: Props) {
  return (
    <div>
      <SideBySideOnMd>
        <Content>
          <OrderData order={order} />
        </Content>
        <Sidebar>
          <Products products={order.products} />
          <OrderLines order={order} />
        </Sidebar>
      </SideBySideOnMd>
    </div>
  );
}
