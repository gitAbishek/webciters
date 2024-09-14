import { SimplifiedProduct } from "~/schema/product";
import { BinIcon } from "~/components/Icon";
import { AccessibleButton } from "~/components/AccessibleButton";
import { useWishlistProductFetcher } from "~/containers/WishlistFavorite/hooks";
import { ListerProductCard } from "~/pages/Wishlist/GridItem/styled";

type Props = {
  product: SimplifiedProduct;
};

export function GridItem({ product }: Props) {
  const { setIsFavorite, isFavorite } = useWishlistProductFetcher(product.guid);

  return (
    <ListerProductCard
      isDeleting={!isFavorite}
      product={product}
      action={
        <AccessibleButton onClick={() => setIsFavorite(false)}>
          <BinIcon size="md" />
        </AccessibleButton>
      }
    />
  );
}
