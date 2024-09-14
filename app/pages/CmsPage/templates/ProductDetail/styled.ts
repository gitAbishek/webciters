import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const GridBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  ${mq.lg} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: var(--space-6) 6rem;
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  ${mq.lg} {
    grid-column: 2;
    grid-row: 1 / 6;
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }
`;

export const PageContent = styled.div`
  margin-top: var(--space-4);
`;
