import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-gray-04);
  border-radius: var(--border-radius);
  padding: var(--space-2) var(--space-3);
  position: relative;
  height: 5.7rem;
  background-color: var(--color-gray-04);
`;

type IsOpen = {
  isOpen: boolean;
};

export const Ul = styled.ul<IsOpen>`
  position: absolute;
  width: 100%;
  background-color: white;
  max-height: 26rem;
  overflow: auto;
  z-index: var(--z-index-popup-box);
  border: ${({ isOpen }) => (isOpen ? `1px solid var(--color-secondary)` : "")};
  top: 0;
  border-radius: var(--border-radius);
`;

type IsHighlighted = {
  isHighlighted: boolean;
};

export const Li = styled.li<IsHighlighted>`
  display: flex;
  align-items: center;
  background-color: ${({ isHighlighted }) =>
    isHighlighted && `var(--color-secondary-90)`};
  padding: var(--space-2) var(--space-3);
  cursor: pointer;
  height: 5.7rem;
`;

export const ImgTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: var(--space-4);
`;

export const Img = styled.img`
  max-height: 3.6rem;
  margin-right: var(--space-4);
`;

export const SelectWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: inline-block;
  position: relative;
`;
