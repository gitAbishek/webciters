import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  ${mq.lg} {
    display: flex;
    flex-direction: row;
    gap: 6rem;
    margin-top: var(--space-4);
  }
`;
