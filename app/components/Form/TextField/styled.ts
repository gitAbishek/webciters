import styled from "@emotion/styled";

export const Root = styled.label``;

type Props = {
  isDisabled?: boolean;
};

export const Input = styled.input<Props>`
  display: block;
  width: 100%;
  background: none;
  margin-top: var(--space-4);
  margin-left: var(--space-3);
  outline: none;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "auto")};

  &::placeholder {
    color: var(--color-placeholder);
  }
`;
export const Field = styled.div<Props>`
  position: relative;
  background: ${({ isDisabled }) =>
    isDisabled ? "var(--color-gray-10)" : "var(--color-gray-04)"};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "text")};
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  height: 5.7rem;
  border: 0.1rem solid transparent;
  transition: 150ms ease border-color;

  &:focus-within {
    border-color: var(--color-gray-50);
  }
`;

// If placeholder is not shown that means there is a value in there.
// For this to work it needs an empty space though
// see: https://stackoverflow.com/questions/8639282/notempty-css-selector-is-not-working

type LabelProps = {
  isError: boolean;
};

export const Label = styled.span<LabelProps>`
  position: absolute;
  left: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top left;

  input:focus + &,
  input:not(:placeholder-shown) + & {
    transform: translateY(-106%) scale(0.75);
  }

  color: ${({ isError }) =>
    isError ? "var(--color-error)!important" : "var(--color-secondary)"};
`;
