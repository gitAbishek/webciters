import styled from "@emotion/styled";
import { NavLink } from "@remix-run/react";
import { variants } from "~/components/Typography";
import { mq } from "~/utils/style";

export const Columns = styled.div`
  display: flex;
  gap: 10rem;

  ${mq.md} {
    margin-top: var(--space-2);
  }
`;

export const Sidebar = styled.aside`
  display: none;

  ${mq.lg} {
    display: flex;
    flex-direction: column;
  }
`;

export const Main = styled.main`
  flex: 1;
`;

export const NavItem = styled(NavLink)`
  padding: var(--space-2) var(--space-4);
  border-left: 0.3rem solid transparent;
  font: ${variants.md};
  transition: 0.2s ease border-color;

  &.active,
  &:hover {
    border-color: var(--color-secondary);
  }
`;
