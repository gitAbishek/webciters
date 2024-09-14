import styled from "@emotion/styled";
import { WishlistFavorite as WishlistFavoriteBase } from "~/containers/WishlistFavorite";
import { mq } from "~/utils/style";

export const WishlistFavorite = styled(WishlistFavoriteBase)`
  border-radius: 50%;

  ${mq.md} {
    background: white;
  }
`;
