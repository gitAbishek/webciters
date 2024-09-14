import styled from "@emotion/styled";
import { Colors, mq, Size } from "~/utils/style";

export const Root = styled.div`
  overflow: hidden;
`;

type OuterProps = {
  gradientColor: Colors;
  hasOffset: boolean;
  spacing: Size;
};

export const Outer = styled.div<OuterProps>`
  --offset: ${({ hasOffset }) => (hasOffset ? "5rem" : "0")};
  --negative-offset: calc(-1 * var(--offset));

  // we implement spacing instead of gap since otherwise its not possible to have perfect columns divided columns (like 33.33%)
  --spacing: ${({ spacing }) => spacing && `var(--space-${spacing})`};
  --negative-spacing: calc(-1 * var(--spacing));

  --gradient-position: calc(var(--offset) + 0.5rem);
  --negative-gradient-position: calc(-1 * var(--gradient-position));

  position: relative;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--gradient-position);
    z-index: 1;
  }

  &:before {
    left: var(--negative-gradient-position);
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      ${({ gradientColor }) => `var(--color-${gradientColor})`}
    );
  }

  &:after {
    right: var(--negative-gradient-position);
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      ${({ gradientColor }) => `var(--color-${gradientColor})`}
    );
  }
`;

type ScrollProps = {
  hasOffset: boolean;
};

export const Scroll = styled.div<ScrollProps>`
  display: flex;
  overflow: auto;
  scroll-snap-type: X mandatory;
  scrollbar-width: none; /* KEEP THIS FOR FIREFOX. It is a known css property but not recognized in my IDE. */
  overflow-scrolling: touch;
  scroll-padding: var(--spacing);
  padding: 0 var(--spacing);

  ${mq.lg} {
    scroll-padding: calc(var(--spacing) + var(--offset));
    padding: 0 calc(var(--spacing) + var(--offset));
    margin-left: ${({ hasOffset }) =>
      hasOffset ? "var(--negative-offset)" : "var(--negative-spacing)"};
    margin-right: ${({ hasOffset }) =>
      hasOffset ? "var(--negative-offset)" : "var(--negative-spacing)"};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    scroll-snap-align: start;
    padding: 0 var(--spacing);

    &:last-of-type {
      scroll-snap-align: end;
    }
  }
`;

export const Nav = styled.button`
  display: none;

  ${mq.lg} {
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 6rem;
    width: 6rem;
    color: var(--color-secondary);
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    transition: opacity 0.2s ease, background-color 0.2s ease;
    z-index: 1;

    &:disabled {
      opacity: 0;
      cursor: default;
      display: none;
    }

    &:hover {
      background-color: white;
    }
  }
`;

export const Prev = styled(Nav)`
  left: var(--space-4);
`;

export const Next = styled(Nav)`
  right: var(--space-4);
`;

export const IndicatorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
`;

type IndicatorProps = {
  isActive: boolean;
};

export const Indicator = styled.span<IndicatorProps>`
  width: 0.8rem;
  height: 0.8rem;
  background: black;
  border-radius: 100%;
  transition: 0.2s opacity ease;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};
`;
