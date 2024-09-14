import styled from "@emotion/styled";
import { Grid as GridBase } from "~/components/Grid";
import { mq } from "~/utils/style";

export const Grid = styled(GridBase)`
  margin: var(--space-4) 0;

  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;
