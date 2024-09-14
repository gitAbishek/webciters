import styled from "@emotion/styled";

type AddressPickerProps = {
  isInPopup?: boolean;
};

export const Root = styled.label<AddressPickerProps>`
  display: flex;
  flex: 0 0 ${({ isInPopup }) => (isInPopup ? "100%" : "26rem")};
  cursor: pointer;
`;

export const AddressWrapper = styled.div`
  padding: var(--space-5);
  border: 2px solid var(--color-gray-20);
  border-radius: 0.4rem;
  flex: 1;
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
  &:checked + .addressWrapper {
    border-color: var(--color-primary);

    .circle {
      border-color: var(--color-primary);
      border-width: 0.6rem;
    }
  }
`;
