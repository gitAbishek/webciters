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

export const ProductInfoWrapper = Stack;

export const QuantityPriceWrapper = Stack;
