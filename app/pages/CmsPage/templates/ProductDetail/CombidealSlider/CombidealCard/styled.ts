import styled from "@emotion/styled";
import { Text } from "~/components/Typography";
import { mq } from "~/utils/style";
import { Button as ButtonBase } from "~/components/Button";

export const CardWrapper = styled.div`
  padding: var(--space-5);
  background-color: var(--color-gray-04);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);

  ${mq.md} {
    display: grid;
    grid-template-columns: 1fr 30rem;
    gap: var(--space-6);
  }

  ${mq.xl} {
    gap: var(--space-13);
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  gap: var(--space-13);
  flex-direction: column;

  ${mq.xl} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ProductWrapper = styled.div`
  position: relative;
  display: flex;
  gap: var(--space-6);
  width: 29rem;

  ${mq.sm} {
    width: 35rem;
  }

  ${mq.xl} {
    width: auto;
    flex-direction: column;
  }

  &:not(:first-child) {
    &:before {
      content: "+";
      position: absolute;
      font-size: 2.8rem;
      left: 2rem;
      top: -4.2rem;

      ${mq.sm} {
        left: 3.4rem;
        top: -4.2rem;
      }

      ${mq.xl} {
        top: 11rem;
        left: -3.4rem;
      }
    }
  }
`;

export const ProductImage = styled.img`
  object-fit: contain;
  margin-bottom: var(--space-3);
  background-color: white;
  width: 5.5rem;
  height: 5.5rem;

  ${mq.sm} {
    width: 8rem;
    height: 8rem;
  }

  ${mq.xl} {
    width: 22rem;
    height: 22rem;
  }
`;

export const SuggestedPrice = styled(Text)`
  position: relative;
  overflow: hidden;
  margin-right: var(--space-3);
`;

export const TotalAdvicePriceWrapper = styled(Text)`
  display: flex;
  justify-content: flex-start;
  gap: var(--space-2);
`;

export const Button = styled(ButtonBase)`
  display: flex;
  gap: var(--space-3);
`;

export const FavoriteWrapper = styled.div`
  position: absolute;
  right: var(--space-1);
  top: var(--space-1);
  display: none;

  ${mq.xl} {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
