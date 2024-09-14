import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";

export type RootProps = {
  readMoreIsActive?: boolean;
};

export const SlideBox = styled.div<RootProps>`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--z-index-popup-box);
  transform: ${({ readMoreIsActive }) =>
    readMoreIsActive ? "translateX(0)" : "translateX(-100%)"};
  transition: 0.13s transform ease-in-out;
`;

export const Overlay = styled.button`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  opacity: 1;
  background: rgba(0, 0, 0, 0.6);
  cursor: default;
`;

export const ReadMoreWrapper = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: white;
  position: relative;
  max-width: 50rem;
`;

export const HeadingWrapper = styled(Stack)`
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-secondary);
`;

export const ContentWrapper = styled.div`
  height: calc(100% - (2.6rem + var(--space-6)));
  padding: var(--space-6) var(--space-4);
  overflow-y: auto;
`;

export const Button = styled.button`
  background: none;
`;
