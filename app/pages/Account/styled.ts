import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-4);

  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;
