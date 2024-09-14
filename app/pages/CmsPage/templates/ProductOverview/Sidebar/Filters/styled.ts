import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { Text } from "~/components/Typography";

export const StackWrapper = styled(Stack)`
  .field {
    height: 4.2rem;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: 0.4rem;

    input {
      text-align: center;
      margin: 0;
    }
  }

  button {
    padding: var(--space-3);
  }
`;

export const AmountText = styled(Text)`
  color: rgba(0, 0, 0, 0.6);
`;
