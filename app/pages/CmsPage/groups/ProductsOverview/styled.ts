import styled from "@emotion/styled";
import { Container } from "~/components/Container";
import { ProductCard as ProductCardBase } from "~/components/ProductCard";
import { mq } from "~/utils/style";

export const ContainerWithMb = styled(Container)`
  margin-bottom: var(--space-4);
`;

export const ProductCard = styled(ProductCardBase)`
  padding: 0 var(--space-2);
  flex: 0 0 60%;

  ${mq.sm} {
    flex: 0 0 38%;
  }

  ${mq.md} {
    flex: 0 0 28%;
  }

  ${mq.xl} {
    flex: 0 0 20%;
  }
`;
