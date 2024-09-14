import styled from "@emotion/styled";
import type { Align, Direction, Justify } from "./index";
import { noPropsForwarding, Size } from "~/utils/style";

// https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/

type RootProps = {
  direction: Direction;
  spacing?: Size;
  gap?: Size;
  align?: Align;
  justify?: Justify;
  wrap?: boolean;
  flex?: number;
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
};

export const Root = styled("div", noPropsForwarding)<RootProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
  gap: ${({ gap }) => gap && `var(--space-${gap})`};
  flex: ${({ flex }) => flex && flex};
  margin: ${({ m }) => m && `var(--space-${m})`};
  margin-top: ${({ mt }) => mt && `var(--space-${mt})`};
  margin-bottom: ${({ mb }) => mb && `var(--space-${mb})`};
  margin-left: ${({ ml }) => ml && `var(--space-${ml})`};
  margin-right: ${({ mr }) => mr && `var(--space-${mr})`};
  padding: ${({ p }) => p && `var(--space-${p})`};
  padding-top: ${({ pt }) => pt && `var(--space-${pt})`};
  padding-bottom: ${({ pb }) => pb && `var(--space-${pb})`};
  padding-left: ${({ pl }) => pl && `var(--space-${pl})`};
  padding-right: ${({ pr }) => pr && `var(--space-${pr})`};

  > * ~ * {
    margin-left: ${({ spacing, direction }) =>
      direction === "row" && `var(--space-${spacing})`};

    margin-top: ${({ spacing, direction }) =>
      direction === "column" && `var(--space-${spacing})`};
  }
`;
