import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const OrderLinesAndAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  ${mq.lg} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
