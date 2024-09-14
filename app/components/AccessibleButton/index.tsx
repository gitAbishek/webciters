import styled from "@emotion/styled";

// Grows clickable area while keeping initial position

type Props = {
  disabled?: boolean;
};

export const AccessibleButton = styled.button<Props>`
  box-sizing: content-box;
  padding: var(--space-1);
  margin: calc(-1 * var(--space-1));
  opacity: ${({ disabled }) => disabled && "0.3"};
`;
