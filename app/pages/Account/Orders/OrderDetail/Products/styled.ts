import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";

export const OrderLine = Stack;

export const ProductWrapper = Stack;

export const ProductImage = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: contain;

  ${mq.lg} {
    width: 10rem;
    height: 10rem;
  }
`;

export const ProductInfoWrapper = styled(Stack)`
  ${mq.lg} {
    flex-direction: row;
    align-items: center;
  }
`;

export const QuantityPriceWrapper = styled(Stack)`
  ${mq.lg} {
    margin-top: 2.3rem;
  }
`;
