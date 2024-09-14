import styled from "@emotion/styled";
import { mq } from "~/utils/style";
import { Container } from "~/components/Container";

export const Root = styled(Container)`
  max-width: var(--login-register-max-width);
  margin: var(--space-4) auto;

  ${mq.md} {
    margin-top: var(--space-8);
  }
`;
