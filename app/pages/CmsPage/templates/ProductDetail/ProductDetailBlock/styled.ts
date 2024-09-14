import styled from "@emotion/styled";
import { mq } from "~/utils/style";
import { Slider as SliderBase } from "~/components/Slider";
import { WishlistFavorite as WishlistFavoriteBase } from "~/containers/WishlistFavorite";

export const Row = styled.div`
  ${mq.lg} {
    display: flex;
    flex-direction: row;
    gap: 6rem;
  }
`;

export const FirstHalfWrapper = styled.div`
  ${mq.sm} {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const SecondHalfWrapper = styled.div`
  max-width: 100%;
  margin-top: var(--space-13);

  ${mq.lg} {
    min-width: 40rem;
  }
`;

export const ProductDetailWrapper = styled.div`
  ${mq.lg} {
    margin-bottom: var(--space-6);
  }
`;

export const Img = styled.img`
  display: block;
  margin-top: 0;
  width: 100%;
  max-height: 60rem;
  flex: 0 0 100%;
  scroll-snap-align: start;

  object-fit: contain;
  object-position: center;
  padding: var(--space-5);
  pointer-events: none;

  ${mq.lg} {
    pointer-events: auto;
    cursor: pointer;
  }
`;

export const Slider = styled(SliderBase)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StickyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-4);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 2;

  ${mq.lg} {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
`;

export const WishlistFavorite = styled(WishlistFavoriteBase)`
  z-index: 2;
  position: absolute;
  right: 0;
  top: calc(var(--space-6) * -1);
`;
