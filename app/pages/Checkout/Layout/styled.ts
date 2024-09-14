import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Root = styled.div`
  ${mq.lg} {
    padding: 0 var(--space-13);
  }
`;

export const Grid = styled.div`
  display: grid;
  column-gap: var(--space-13);
  row-gap: var(--space-8);

  ${mq.lg} {
    grid-template-columns: 1fr 40rem;
  }
`;

// Force some reason the slider forces out of the container :-(
export const FullWidth = styled.div`
  width: 100%;
  overflow: hidden;
`;
