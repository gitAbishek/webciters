import { useLoaderData } from "@remix-run/react";
import { OrderHeading } from "~/pages/Account/Orders/OrderDetail/OrderHeading";
import { Products } from "./Products";
import { Stack } from "~/components/Stack";
import { OrderFooter } from "~/pages/Account/Orders/OrderDetail/OrderFooter";
import { AccountOrderDetailData } from "~/routes/account/bestellingen/$id";

export function AccountOrderDetail() {
  const { order } = useLoaderData<AccountOrderDetailData>();

  return (
    <Stack gap={6} direction="column">
      <OrderHeading order={order} />
      <Products products={order.products} />
      <OrderFooter order={order} />
    </Stack>
  );
}
