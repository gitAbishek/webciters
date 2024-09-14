import styled from "@emotion/styled";
import { Link } from "@remix-run/react";
import { Tag } from "~/components/Tag";
import { WishlistFavorite } from "~/containers/WishlistFavorite";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";

type RootProps = {
  isSmallerVariant?: boolean;
};

export const Root = styled.div<RootProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const MaxGrow = styled.div`
  flex-grow: 1;
`;

export const ImgHolder = styled.div`
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  max-width: 100%;
  width: 100%;
  padding: 1rem;

  ${mq.md} {
    padding: 2rem;
  }
`;

export const FavButton = styled(WishlistFavorite)`
  position: absolute;
  right: var(--space-2);
  top: var(--space-2);
  background: white;
  border-radius: 50%;
  z-index: 1;
`;

export const LabelTag = styled(Tag)`
  margin: var(--space-3) var(--space-1);
  display: inline-block;
`;

export const StretchedLink = styled(Link)`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

export const StackMw = styled(Stack)`
  max-width: 100%;
`;
