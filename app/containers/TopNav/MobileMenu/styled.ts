import styled from "@emotion/styled";
import { Container } from "../../../components/Container";

type IsOpen = {
  isOpen: boolean;
};

export const Base = styled.div<IsOpen>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : "-100%")});
  z-index: var(--z-index-nav-mobile-menu);
`;

export const Root = styled(Base)`
  right: 6rem;
  background: var(--color-white);
  transition: transform 0.2s cubic-bezier(0, 0.52, 0, 1);
  display: flex;
  flex-direction: column;
  z-index: var(--z-index-nav-mobile-menu);
`;

// MobileMenu gets rendered in place by this relative
export const SubmenuHolder = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled(Base)`
  right: 0;
  background: var(--color-black);
  opacity: ${({ isOpen }) => (isOpen ? "0.6" : "0")};
  transition: opacity 0.3s ease;
`;

export const Header = styled(Container)`
  background: var(--color-secondary);
  color: var(--color-white);
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuWrappers = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-3) 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &:first-of-type {
    border: 0;
  }

  &:last-of-type {
    border: 0;
    margin-top: auto;
  }
`;
