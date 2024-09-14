import styled from "@emotion/styled";
import { Button } from "~/components/Button";

export const ErrorBoxWrapper = styled.div`
  background-color: var(--color-error);
  padding: var(--space-4);
  color: white;
`;

export const CloseButton = styled(Button)`
  background: none;
  border: none;
  color: white;
  position: relative;
  top: -0.8rem;
  right: -0.8rem;
  padding: var(--space-2);
`;
