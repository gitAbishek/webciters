import { SimplifiedProductWithQuantity } from "~/schema/product";
import {
  OrderLine,
  ProductImage,
  ProductInfoWrapper,
  ProductWrapper,
  QuantityPriceWrapper,
} from "./styled";
import noImageSvg from "~/resources/images/no-image.svg";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import { Stack } from "~/components/Stack";
import { Text } from "~/components/Typography";
import { formatAsCurrency } from "~/utils/number";

type Props = {
  products: SimplifiedProductWithQuantity[];
};

export function Products({ products }: Props) {
  return (
    <>
      {products.map((product) => (
        <OrderLine gap={4} direction="column" key={product.guid} flex={1}>
          <ProductWrapper gap={4} flex={1} align="center">
            <ProductImage
              src={product.primary_thumbnail_url || noImageSvg}
              alt={product.primary_thumbnail_alt || NO_IMAGE_FOUND}
            />
            <ProductInfoWrapper gap={2} direction="column" flex={1}>
              <Stack direction="column" flex={1}>
                <Text variant="sm">{product.brand}</Text>
                <Text variant="sm" weight="bold">
                  {product.name}
                </Text>
              </Stack>
              <QuantityPriceWrapper
                justify="space-between"
                align="flex-start"
                flex={1}
              >
                <Text variant="sm" weight="semi-bold">
                  Aantal: {product.quantity}
                </Text>
                <Text variant="sm" weight="semi-bold">
                  {formatAsCurrency(product.price)}
                </Text>
              </QuantityPriceWrapper>
            </ProductInfoWrapper>
          </ProductWrapper>
        </OrderLine>
      ))}
    </>
  );
}
