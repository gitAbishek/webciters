import styled from "@emotion/styled";
import { Grid as GridBase } from "~/components/Grid";
import { mq } from "~/utils/style";
import { Container } from "~/components/Container";
import { SubmitBtn } from "~/components/Form/SubmitBtn";

export const Root = styled(Container)`
  max-width: var(--login-register-max-width);
  margin: var(--space-4) auto;

  ${mq.md} {
    margin-top: var(--space-8);
  }
`;

export const Grid = styled(GridBase)`
  column-gap: var(--space-8);

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CreateBtn = styled(SubmitBtn)`
  align-self: flex-start;
`;
