import { useWishlistProductFetcher } from "./hooks";
import { AccessibleButton } from "~/components/AccessibleButton";
import { FavIcon } from "./styled";

type Props = {
  spliGuid: string;
  className?: string;
};

export function WishlistFavorite({ spliGuid, className }: Props) {
  const { setIsFavorite, isFavorite } = useWishlistProductFetcher(spliGuid);

  return (
    <AccessibleButton
      className={className}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <FavIcon isActive={isFavorite} size="md" />
    </AccessibleButton>
  );
}
