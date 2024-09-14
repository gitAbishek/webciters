import { Stack } from "~/components/Stack";
import {
  OrderLine,
  ProductWrapper,
  ProductImage,
  ProductInfoWrapper,
  QuantityPriceWrapper,
} from "./styled";
import { Text } from "~/components/Typography";
import { formatAsCurrency } from "~/utils/number";
import { SimplifiedProductWithQuantity } from "~/schema/product";
import noImageSvg from "~/resources/images/no-image.svg";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import { Link } from "~/components/Link";

type Props = {
  products: SimplifiedProductWithQuantity[];
};

export function Products({ products }: Props) {
  return (
    <Stack gap={4} direction="column">
      <hr />
      {products.map((product) => (
        <OrderLine gap={4} direction="column" key={product.guid} flex={1}>
          <ProductWrapper gap={4} flex={1}>
            <Link to={product.url}>
              <ProductImage
                src={product.primary_thumbnail_url || noImageSvg}
                alt={product.primary_thumbnail_alt || NO_IMAGE_FOUND}
              />
            </Link>
            <ProductInfoWrapper gap={2} direction="column" flex={1}>
              <Stack direction="column" flex={2}>
                <Text variant="sm">{product.brand}</Text>
                <Link to={product.url}>
                  <Text weight="semi-bold">{product.name}</Text>
                </Link>
              </Stack>
              <QuantityPriceWrapper
                justify="space-between"
                align="flex-start"
                flex={1}
                gap={2}
              >
                <Text weight="semi-bold">Aantal: {product.quantity}</Text>
                <Text weight="semi-bold">
                  {formatAsCurrency(product.price)}
                </Text>
              </QuantityPriceWrapper>
            </ProductInfoWrapper>
          </ProductWrapper>
          <hr />
        </OrderLine>
      ))}
    </Stack>
  );
}
