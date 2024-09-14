import styled from "@emotion/styled";
import { variants } from "~/components/Typography";
import { Link } from "~/components/Link";

type Props = {
  isActive: boolean;
};

export const RootMenuButton = styled.button<Props>`
  font: ${variants.md};
  padding: var(--space-4);
  position: relative;
  display: inline-block;

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &:before {
    content: "";
    border-bottom: 2px solid var(--color-secondary);
    bottom: -0.2rem;
    position: absolute;
    left: var(--space-4);
    right: var(--space-4);
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

export const RootMenuLink = RootMenuButton.withComponent(Link);
