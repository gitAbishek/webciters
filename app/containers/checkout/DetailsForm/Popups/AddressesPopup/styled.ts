import styled from "@emotion/styled";
import { Button } from "~/components/Button";
import { Stack } from "~/components/Stack";

export const ButtonFw = styled(Button)`
  flex: 1;
  justify-content: center;
  text-align: center;
`;

export const AddAddressButton = styled.button`
  padding: var(--space-3);
  border: 1px solid var(--color-gray-20);
  border-radius: 0.4rem;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
`;

export const StackScrollable = styled(Stack)`
  max-height: 60rem;
  overflow: auto;
  padding: var(--space-4);
  padding-bottom: var(--space-8);
`;

export const StackPadding = styled(Stack)`
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
  padding: var(--space-4);
`;
