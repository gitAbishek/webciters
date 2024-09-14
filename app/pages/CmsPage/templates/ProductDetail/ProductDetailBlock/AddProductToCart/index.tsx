import { AddProductToCartForm } from "~/containers/Cart/AddProductToCartForm";
import { ProductQuantityField } from "~/components/ProductQuantityField";
import { Stack } from "~/components/Stack";
import { BasketIcon, InfoIcon } from "~/components/Icon";
import { Text } from "~/components/Typography";
import { FullProduct } from "~/schema/product";
import { AmountAndButtonWrapper, Button, ErrorText } from "./styled";
import { useCart } from "~/containers/Cart/hooks";

type Props = {
  product: FullProduct;
};

export function AddProductToCart({ product }: Props) {
  const cart = useCart();
  const productInCart = cart?.products.find(
    (item) => item.guid === product.guid
  );
  const inStock = productInCart
    ? product.stock - productInCart.quantity
    : product.stock;
  const isOutOfStock = inStock === 0;

  return (
    <div>
      <AddProductToCartForm product={product} id={product.guid}>
        {(isLoading) => (
          <>
            <AmountAndButtonWrapper>
              <ProductQuantityField
                name="new_quantity"
                newValue={1}
                disabled={!product.allow_selling || isOutOfStock}
                inStock={inStock}
              />
              <Button
                isLoading={isLoading}
                disabled={!product.allow_selling || isOutOfStock}
              >
                <Stack spacing={3} align="center">
                  <BasketIcon size="md" />
                  <Text weight="semi-bold" variant="sm">
                    In winkelwagen
                  </Text>
                </Stack>
              </Button>
            </AmountAndButtonWrapper>
            {productInCart && isOutOfStock && (
              <Stack gap={2} mt={3}>
                <InfoIcon color="error" size="sm" />
                <ErrorText color="error" variant="sm">
                  Volledige voorraad zit al in je winkelmand.
                </ErrorText>
              </Stack>
            )}
          </>
        )}
      </AddProductToCartForm>
    </div>
  );
}
