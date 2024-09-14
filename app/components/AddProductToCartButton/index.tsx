import { BasketIcon, PlusIcon } from "~/components/Icon";
import { AddToCartBtn } from "./styled";

type Props = {
  isLoading: boolean;
};

export function AddProductToCartButton({ isLoading }: Props) {
  return (
    <AddToCartBtn isLoading={isLoading}>
      <PlusIcon />
      <BasketIcon />
    </AddToCartBtn>
  );
}
