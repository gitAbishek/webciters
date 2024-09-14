import styled from "@emotion/styled";
import { mq } from "~/utils/style";
import { Container } from "~/components/Container";
import { Grid as GridBase } from "~/components/Grid";

export const Root = styled(Container)`
  max-width: var(--login-register-max-width);
  margin: var(--space-4) auto;

  ${mq.md} {
    margin-top: var(--space-8);
  }
`;

export const Grid = styled(GridBase)`
  row-gap: var(--space-10);
  column-gap: var(--space-8);

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`;
