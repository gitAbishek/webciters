import { Stack } from "~/components/Stack";
import { ProductQuantityField } from "~/components/ProductQuantityField";
import { TextDashThrough } from "./styled";
import { Text } from "~/components/Typography";
import { formatAsCurrency } from "~/utils/number";
import { BinIcon } from "~/components/Icon";
import { WishlistFavorite } from "~/containers/WishlistFavorite";
import { SimplifiedProduct } from "~/schema/product";
import { useCartProduct } from "~/containers/Cart/hooks";
import { AccessibleButton } from "~/components/AccessibleButton";

type Props = {
  product: SimplifiedProduct;
};

export function ProductContent({ product }: Props) {
  const { setQuantity, quantity } = useCartProduct(product.guid);

  return (
    <Stack spacing={3} justify="space-between">
      <Stack spacing={4} align="center">
        <AccessibleButton onClick={() => removeFromCart(product)}>
          <BinIcon size="md" />
        </AccessibleButton>
        <ProductQuantityField
          name="amount"
          newValue={quantity}
          onBlur={(value) => updateProduct(value, product)}
          inStock={product.stock}
        />
        <WishlistFavorite spliGuid={product.guid} />
      </Stack>
      <Stack spacing={1} align="flex-end" direction="column">
        {product.suggested_price && (
          <TextDashThrough variant="sm" weight="semi-bold">
            {formatAsCurrency(product.suggested_price * quantity)}
          </TextDashThrough>
        )}
        <Text variant="md" weight="bold">
          {formatAsCurrency(product.price * quantity)}
        </Text>
      </Stack>
    </Stack>
  );

  function removeFromCart(productToRemove: SimplifiedProduct) {
    gtag("event", "remove_from_cart", {
      products: [
        {
          id: productToRemove.guid,
          name: productToRemove.name,
          price: productToRemove.price,
          quantity,
        },
      ],
    });
    setQuantity(0.0);
  }

  function updateProduct(
    newQuantity: number,
    productToUpdate: SimplifiedProduct
  ) {
    const oldQuantity = quantity;

    // When quantity is added it will add x products to the cart.
    if (newQuantity > oldQuantity) {
      const quantityDifference = newQuantity - oldQuantity;
      gtag("event", "add_to_cart", {
        products: [
          {
            id: productToUpdate.guid,
            name: productToUpdate.name,
            price: productToUpdate.price,
            quantity: quantityDifference,
          },
        ],
      });
    }

    // When quantity is lowered it will remove x products from the cart.
    if (newQuantity < oldQuantity) {
      const quantityDifference = (newQuantity - oldQuantity) * -1;
      gtag("event", "remove_from_cart", {
        products: [
          {
            id: productToUpdate.guid,
            name: productToUpdate.name,
            price: productToUpdate.price,
            quantity: quantityDifference,
          },
        ],
      });
    }

    setQuantity(newQuantity);
  }
}
