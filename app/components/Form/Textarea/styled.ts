import styled from "@emotion/styled";

export const Root = styled.label``;

export const Field = styled.div`
  position: relative;
  background: var(--color-gray-04);
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  cursor: text;
  border: 0.1rem solid transparent;
  transition: 150ms ease border-color;

  &:focus-within {
    border-color: var(--color-gray-50);
  }
`;

export const TextareaStyled = styled.textarea`
  height: 10rem;
  background: none;
  width: 100%;
  display: block;
  margin-top: var(--space-7);
  margin-left: var(--space-3);
  outline: none;

  &::placeholder {
    color: var(--color-placeholder);
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
  top: var(--space-7);
  transform: translateY(-50%);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top left;

  textarea:focus + &,
  textarea:not(:placeholder-shown) + & {
    transform: translateY(-106%) scale(0.75);
  }

  color: ${({ isError }) =>
    isError ? "var(--color-error)!important" : "var(--color-secondary)"};
`;
