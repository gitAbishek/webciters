import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";

export const Image = styled.img`
  width: 10rem;
  object-fit: contain;
`;

export const ProductsWrapper = styled.div`
  flex: 1;
`;

export const StackFullWidth = styled(Stack)`
  width: 100%;
`;

export const ServiceWrapper = styled.div`
  ${mq.lg} {
    padding-left: 8.6rem;
  }
`;
