import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Circle = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  margin-right: var(--space-2);
  border-radius: 50%;
`;

export const Input = styled.input`
  &:checked ~ div {
    border-color: var(--color-primary);
    border-width: 0.6rem;
  }
`;
