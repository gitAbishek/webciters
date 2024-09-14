import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Root = styled.div`
  display: flex;
  gap: var(--space-6);
  flex-direction: column;
  padding: var(--space-6) var(--space-4) 0;

  ${mq.lg} {
    padding: var(--space-6) var(--space-6) 0;
  }
`;
