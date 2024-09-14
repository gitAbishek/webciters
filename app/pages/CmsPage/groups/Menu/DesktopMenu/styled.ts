import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Root = styled.div`
  display: none;

  ${mq.lg} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: var(--space-8);
    padding-bottom: var(--space-8);
  }
`;
