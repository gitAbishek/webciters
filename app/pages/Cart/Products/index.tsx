import { Fragment } from "react";
import { Heading, Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { Image, ProductsWrapper, StackFullWidth } from "./styled";
import { ProductContent } from "./ProductContent";
import { ProductHeading } from "./ProductHeading";
import { SimplifiedProductWithQuantity } from "~/schema/product";
import noImage from "~/resources/images/no-image.svg";
import { getProductQuantitySum } from "~/utils/cart";
import { Link } from "~/components/Link";

type Props = {
  products: SimplifiedProductWithQuantity[];
};

export function Products({ products }: Props) {
  return (
    <ProductsWrapper>
      <Heading as="h2">Mijn winkelmand</Heading>
      <Text mt={1} mb={8}>
        {getProductQuantitySum(products)} Product(en)
      </Text>

      <Stack spacing={8} direction="column">
        {products.map((product, index) => (
          <Fragment key={product.guid}>
            {index === 0 && <hr />}
            <div>
              <Stack spacing={4}>
                <Link to={product.url}>
                  <Image src={product.primary_thumbnail_url || noImage} />
                </Link>

                <StackFullWidth
                  spacing={2}
                  direction="column"
                  justify="space-between"
                >
                  <ProductHeading
                    brand={product.brand}
                    productTitle={product.name}
                    stockClassification={product.stock_classification}
                    url={product.url}
                  />
                  <ProductContent product={product} />
                </StackFullWidth>
              </Stack>
            </div>
            <hr />
          </Fragment>
        ))}
      </Stack>
    </ProductsWrapper>
  );
}
