import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";

export const PopupHeaderWrapper = styled(Stack)`
  padding: var(--space-4);
  background-color: var(--color-secondary);
  position: relative;

  ${mq.lg} {
    padding: var(--space-6);
  }
`;
