import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-6);

  ${mq.sm} {
    justify-content: flex-start;
    gap: var(--space-13);
  }

  ${mq.lg} {
    gap: 8rem;
  }
`;

export const Products = styled.div`
  display: flex;
  gap: var(--space-5);
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
  margin-top: var(--space-4);
`;
