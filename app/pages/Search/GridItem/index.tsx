import { SimplifiedProduct } from "~/schema/product";
import { ListerProductCard } from "~/components/ListerProductCard";
import { WishlistFavorite } from "./styled";

type Props = {
  product: SimplifiedProduct;
};

export function GridItem({ product }: Props) {
  return (
    <ListerProductCard
      action={<WishlistFavorite spliGuid={product.guid} />}
      product={product}
    />
  );
}
