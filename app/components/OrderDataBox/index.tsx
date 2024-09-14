import { EditableDataBox } from "~/components/EditableDataBox";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import { Stack } from "~/components/Stack";
import { Heading, Text } from "~/components/Typography";
import { Image, OrderInfo, Products } from "./styled";
import { formatAsCurrency } from "~/utils/number";
import { Order } from "~/schema/order";
import noImageSvg from "~/resources/images/no-image.svg";
import { Link, LinkProps } from "~/components/Link";

type Props = {
  order: Order;
  goToLink: LinkProps;
};

export function OrderDataBox({ order, goToLink }: Props) {
  const paymentLink = order.payment_url
    ? {
        label: "Betalen",
        to: order.payment_url,
      }
    : undefined;

  return (
    <EditableDataBox
      key={order.guid}
      goToLink={goToLink}
      paymentLink={paymentLink}
    >
      <Stack gap={4} direction="column">
        <Heading as="h3" variant="md" weight="semi-bold">
          {order.order_number}
        </Heading>
        <OrderInfo>
          <div>
            <Text weight="semi-bold">Besteld op</Text>
            <Text variant="sm">{order.order_date}</Text>
          </div>
          <div>
            <Text weight="semi-bold">Totaal</Text>
            <Text variant="sm">
              {formatAsCurrency(order.total_amount_incl_tax)}
            </Text>
          </div>
          <div>
            <Text weight="semi-bold">Besteld op</Text>
            <Text variant="sm">{order.order_status}</Text>
          </div>
        </OrderInfo>
        <Products>
          {order.products.map((product) => (
            <Link key={product.guid} to={product.url}>
              <Image
                src={product.primary_thumbnail_url || noImageSvg}
                alt={product.primary_thumbnail_alt || NO_IMAGE_FOUND}
              />
            </Link>
          ))}
        </Products>
      </Stack>
    </EditableDataBox>
  );
}
