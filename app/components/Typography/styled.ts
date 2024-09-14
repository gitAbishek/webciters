import styled from "@emotion/styled";
import { Size, Colors, Weights, noPropsForwarding } from "~/utils/style";

export const variants = {
  xs: "var(--font-size-xs) / var(--line-height-xs) var(--body-font), sans-serif",
  sm: "var(--font-size-sm) / var(--line-height-sm) var(--body-font), sans-serif",
  md: "var(--font-size-md) / var(--line-height-md) var(--body-font), sans-serif",
  lg: "700 var(--font-size-lg) / var(--line-height-lg) var(--heading-font), serif",
  xl: "700 var(--font-size-xl) / var(--line-height-xl) var(--heading-font), serif",
  xxl: "700 var(--font-size-xxl) / var(--line-height-xxl) var(--heading-font), serif",
};

export type Variants = keyof typeof variants;

type NodeProps = {
  variant: Variants;
  weight?: Weights;
  mt?: Size;
  mb?: Size;
  color?: Colors;
};

export const Node = styled("p", noPropsForwarding)<NodeProps>`
  font: ${({ variant }) => variants[variant]};
  margin-top: ${({ mt }) => mt && `var(--space-${mt})`};
  margin-bottom: ${({ mb }) => mb && `var(--space-${mb})`};
  color: ${({ color }) => color && `var(--color-${color})`};
  font-weight: ${({ weight }) => weight && `var(--font-weight-${weight})`};
`;
