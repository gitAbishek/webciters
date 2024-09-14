import { useLoaderData } from "@remix-run/react";
import { Heading, Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { OrderFailedBlock } from "./OrderFailedBlock";
import { OrderDataBox } from "~/components/OrderDataBox";
import { AccountOrdersData } from "~/routes/account/bestellingen";
import { compilePath } from "~/utils/path";
import { ROUTE_ACCOUNT_ORDER_DETAIL } from "~/utils/constants";

const getDetail = compilePath(ROUTE_ACCOUNT_ORDER_DETAIL);

export function AccountOrders() {
  const { orders } = useLoaderData<AccountOrdersData>();

  return (
    <Stack direction="column" gap={6}>
      <OrderFailedBlock />
      <Heading as="h1" variant="xl">
        Bestellingen
      </Heading>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderDataBox
            key={order.guid}
            order={order}
            goToLink={{
              to: getDetail({ id: order.guid }),
              label: "Bekijk bestelling",
            }}
          />
        ))
      ) : (
        <Text>Er zijn nog geen bestellingen van je bekend</Text>
      )}
    </Stack>
  );
}
