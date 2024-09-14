import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Grid = styled.div`
  margin-top: var(--space-4);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: var(--space-4);

  ${mq.md} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Img = styled.img`
  max-width: 100%;
`;
