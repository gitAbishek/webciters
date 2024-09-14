import { AddProductToCartForm } from "~/containers/Cart/AddProductToCartForm";
import { Stack } from "~/components/Stack";
import { BasketIcon } from "~/components/Icon";
import { Text } from "~/components/Typography";
import { AmountAndButtonWrapper, Button } from "./styled";
import { HiddenField } from "~/components/Form/HiddenField";
import { SimplifiedProduct } from "~/schema/product";

type Props = {
  productGuid: string;
  products: SimplifiedProduct[];
};

export function AddToCartButton({ productGuid, products }: Props) {
  return (
    <AddProductToCartForm products={products} id={productGuid}>
      {(isLoading) => (
        <AmountAndButtonWrapper>
          <HiddenField name="new_quantity" value="1" />
          <Button isLoading={isLoading}>
            <Stack spacing={3} align="center">
              <Text weight="semi-bold" variant="sm">
                Combideal in winkelmand
              </Text>
              <BasketIcon size="md" />
            </Stack>
          </Button>
        </AmountAndButtonWrapper>
      )}
    </AddProductToCartForm>
  );
}
