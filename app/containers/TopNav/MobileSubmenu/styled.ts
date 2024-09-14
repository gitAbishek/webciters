import styled from "@emotion/styled";
import { AccessibleButton } from "~/components/AccessibleButton";
import { Colors, mq } from "~/utils/style";

type MaybeColorVariant = {
  color?: Colors;
};

export const ClickableTitle = styled.button<MaybeColorVariant>`
  font-size: var(--font-size-md);
  text-align: left;
  padding: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ color }) => color && `var(--color-${color})`};
  font-weight: ${({ color }) => color && "var(--font-weight-semi-bold)"};
`;

type SubmenuProps = {
  isOpen: boolean;
};

export const Submenu = styled.div<SubmenuProps>`
  position: absolute;
  inset: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : "-100%")});
  background: var(--color-white);
  overflow-y: auto;

  ${mq.md} {
    //display: none;
    bottom: initial; // do we need bottom
    left: calc(-1 * var(--space-1));
    top: 5rem;
    transform: translateX(0);
    display: ${({ isOpen }) => !isOpen && "none"};
    z-index: 1;
  }
`;

export const GoBack = styled(AccessibleButton)`
  margin-top: var(--space-5);
  margin-bottom: var(--space-5);
  display: flex;
  align-items: center;

  ${mq.md} {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
