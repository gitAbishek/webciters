import {
  CardWrapper,
  Content,
  FavoriteWrapper,
  ImageWrapper,
  ProductImage,
  ProductsWrapper,
  ProductWrapper,
  SuggestedPrice,
  TotalAdvicePriceWrapper,
} from "./styled";
import { Text } from "~/components/Typography";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import { Stack } from "~/components/Stack";
import { formatAsCurrency } from "~/utils/number";
import { Combideal } from "~/schema/product";
import { WishlistFavorite } from "~/containers/WishlistFavorite";
import noImageSvg from "~/resources/images/no-image.svg";
import { AddToCartButton } from "../AddToCartButton";

type Props = {
  combideal: Combideal;
};

export function CombidealCard({ combideal }: Props) {
  const moneySaved = combideal.suggested_price
    ? combideal.suggested_price - combideal.price
    : null;

  return (
    <div>
      <CardWrapper>
        <Content>
          <ProductsWrapper>
            {combideal.products.map((product) => (
              <ProductWrapper key={product.guid}>
                <ImageWrapper>
                  <FavoriteWrapper>
                    <WishlistFavorite spliGuid={product.guid} />
                  </FavoriteWrapper>
                  <ProductImage
                    src={
                      product.primary_thumbnail_url
                        ? product.primary_thumbnail_url
                        : noImageSvg
                    }
                    alt={
                      product.primary_thumbnail_alt
                        ? product.primary_thumbnail_alt
                        : NO_IMAGE_FOUND
                    }
                  />
                </ImageWrapper>
                <div>
                  <Text weight="semi-bold">{product.name}</Text>
                  <Stack gap={2} mt={2}>
                    {product.suggested_price && (
                      <SuggestedPrice variant="sm" weight="semi-bold">
                        {formatAsCurrency(product.suggested_price)}
                      </SuggestedPrice>
                    )}
                    <Text variant="sm" weight="semi-bold">
                      {formatAsCurrency(product.price)}
                    </Text>
                  </Stack>
                </div>
              </ProductWrapper>
            ))}
          </ProductsWrapper>
          <Stack direction="column" gap={5} justify="center" flex={1}>
            <Stack direction="column" gap={2} justify="center">
              <Stack justify="space-between" gap={2}>
                {combideal.suggested_price && (
                  <TotalAdvicePriceWrapper variant="sm">
                    Totaal:{" "}
                    <SuggestedPrice as="span" variant="sm">
                      {formatAsCurrency(combideal.suggested_price)}
                    </SuggestedPrice>
                  </TotalAdvicePriceWrapper>
                )}
              </Stack>
              {moneySaved && combideal.suggested_price && (
                <Text variant="sm">
                  Combinatiekorting: {formatAsCurrency(moneySaved)}
                </Text>
              )}
              {combideal.price && (
                <Text weight="semi-bold" variant="sm" mt={2}>
                  Actieprijs: {formatAsCurrency(combideal.price)}
                </Text>
              )}
            </Stack>
            <Stack direction="column" gap={1}>
              <AddToCartButton
                products={combideal.products}
                productGuid={combideal.guid}
              />
              <Text variant="xs" weight="medium">
                {combideal.delivery_statement}
              </Text>
            </Stack>
          </Stack>
        </Content>
      </CardWrapper>
    </div>
  );
}
