import styled from "@emotion/styled";
import { mqReverse } from "~/utils/style";

type Props = {
  isFocused: boolean;
};

export const NavFocusOverlay = styled.div<Props>`
  ${mqReverse.md} {
    position: relative;
    z-index: var(--z-index-main-header-overlay);

    &:focus-within:before {
      display: ${({ isFocused }) => (isFocused ? "block" : "none")};
      content: "";
      position: fixed;
      inset: 0;
      background-color: var(--color-black);
      opacity: 0.5;
      z-index: -1;
    }
  }
`;
