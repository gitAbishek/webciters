import { Heading, Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { LinkArrowButton } from "~/components/ArrowButton";
import { OrderTopInfoWrapper } from "./styled";
import { formatAsCurrency } from "~/utils/number";
import { KIYOH_PUBLIC_LINK } from "~/utils/constants";
import { Order } from "~/schema/order";
import { Link } from "~/components/Link";

type Props = {
  order: Order;
};

export function OrderHeading({ order }: Props) {
  return (
    <div>
      <Heading as="h2" mb={2}>
        Ordernummer: {order.order_number}
      </Heading>
      <Stack gap={8} direction="column">
        <LinkArrowButton to={KIYOH_PUBLIC_LINK} color="primary">
          Schrijf je beoordeling
        </LinkArrowButton>
        <OrderTopInfoWrapper>
          <div>
            <Text variant="sm" weight="semi-bold">
              Besteld Op
            </Text>
            <Text variant="sm">{order.order_date}</Text>
          </div>
          <div>
            <Text variant="sm" weight="semi-bold">
              Totaal
            </Text>
            <Text variant="sm">
              {formatAsCurrency(order.total_amount_incl_tax)}
            </Text>
          </div>
          <div>
            <Text variant="sm" weight="semi-bold">
              Status
            </Text>
            <Text variant="sm">{order.order_status}</Text>
            {order.payment_url && (
              <Link color="primary" to={order.payment_url}>
                Klik hier om nu te betalen
              </Link>
            )}
          </div>
        </OrderTopInfoWrapper>
      </Stack>
    </div>
  );
}
