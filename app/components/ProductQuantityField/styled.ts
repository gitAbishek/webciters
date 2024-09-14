import styled from "@emotion/styled";

export const Field = styled.input`
  display: block;
  height: 4rem;
  background: none;
  padding: var(--space-5) var(--space-4);
  outline: none;
  text-align: center;
  width: 6rem;

  &::placeholder {
    color: var(--color-placeholder);
  }
`;

type RootProps = {
  isDisabled?: boolean;
};

export const Root = styled.label<RootProps>`
  position: relative;
  background: var(--color-gray-04);
  align-items: center;
  border-radius: var(--border-radius);
  display: flex;
  background-color: white;
  border: 1px solid black;

  &:focus-within {
    outline: 1px solid var(--color-gray-50);
  }

  opacity: ${({ isDisabled }) => isDisabled && "0.2"};
`;

export const Button = styled.button`
  font-size: var(--font-size-xl);
  padding: 0 var(--space-3);
  height: 4rem;
`;
