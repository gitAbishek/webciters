import { Stack } from "~/components/Stack";
import { Heading, Text } from "~/components/Typography";
import { Image, StackFull } from "./styled";
import { formatAsCurrency } from "~/utils/number";
import { SimplifiedProductWithQuantity } from "~/schema/product";
import noImage from "~/resources/images/no-image.svg";
import { NO_IMAGE_FOUND } from "~/utils/constants";

type Props = {
  product: SimplifiedProductWithQuantity;
};

export function Product({
  product: {
    brand,
    price,
    name,
    quantity,
    primary_thumbnail_url,
    primary_thumbnail_alt,
  },
}: Props) {
  return (
    <Stack gap={4}>
      <Image
        src={primary_thumbnail_url || noImage}
        alt={primary_thumbnail_alt || NO_IMAGE_FOUND}
      />
      <StackFull gap={1} direction="column">
        <Text variant="sm">{brand}</Text>
        <Heading as="h3" variant="sm" weight="semi-bold">
          {name}
        </Heading>
        <Stack gap={3} justify="space-between">
          <Heading as="h3" variant="sm" weight="semi-bold">
            Aantal: {quantity}
          </Heading>
          <Heading as="h3" variant="sm" weight="semi-bold">
            {formatAsCurrency(price * quantity)}
          </Heading>
        </Stack>
      </StackFull>
    </Stack>
  );
}
