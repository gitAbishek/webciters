import styled from "@emotion/styled";

export const Root = styled.div`
  background: var(--color-secondary);
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2);
  gap: var(--space-1);
  color: var(--color-white);
`;

type FadeItemProps = {
  activeIndex: boolean;
};

export const FadeItem = styled.div<FadeItemProps>`
  transition: 1s opacity ease-in;

  * {
    margin-bottom: 0 !important;
  }

  ${({ activeIndex }) =>
    activeIndex
      ? `
          opacity:1;
          `
      : `
          opacity:0;
          transform:translateY(-1000%);
          position:absolute;
      `}
`;
