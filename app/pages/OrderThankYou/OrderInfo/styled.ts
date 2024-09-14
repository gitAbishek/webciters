import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const SideBySideOnMd = styled.div`
  display: grid;
  gap: var(--space-6);
  margin-top: var(--space-8);
  grid-auto-flow: revert;

  ${mq.lg} {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Content = styled.div`
  grid-column: 1;
`;

export const Sidebar = styled.div`
  grid-column: 1;
  border-width: 1px;
  border-color: var(--color-border);
  padding: var(--space-6);

  ${mq.lg} {
    grid-column: 2;
  }
`;
