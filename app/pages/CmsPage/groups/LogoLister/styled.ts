import styled from "@emotion/styled";
import { Container } from "~/components/Container";
import { mq } from "~/utils/style";

export const FlexContainer = styled(Container)`
  display: flex;
  gap: var(--space-6);
  justify-content: space-between;
  flex-wrap: wrap;

  ${mq.md} {
    justify-content: center;
  }
`;
