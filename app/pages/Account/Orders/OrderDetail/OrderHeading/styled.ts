import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const OrderTopInfoWrapper = styled.div`
  display: flex;
  gap: var(--space-13);
  justify-content: space-between;

  ${mq.sm} {
    justify-content: flex-start;
    gap: 13rem;
  }

  ${mq.md} {
    gap: 17rem;
  }
`;
