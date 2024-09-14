import styled from "@emotion/styled";
import { AccessibleButton } from "~/components/AccessibleButton";

export const OrderFailedWrapper = styled.div`
  position: relative;
  background: var(--color-secondary);
  color: white;
  padding: var(--space-6) var(--space-8);
`;

export const Button = styled(AccessibleButton)`
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
`;
