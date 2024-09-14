import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";
import { Container } from "~/components/Container";

export const Root = styled(Stack)`
  background-color: var(--color-gray-04);
  padding: var(--space-8) 0;
`;

export const FirstElementNoMargin = styled.div`
  > *:first-child {
    margin-top: 0;
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  gap: var(--space-6);
  flex-direction: column;

  ${mq.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
