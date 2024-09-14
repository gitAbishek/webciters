import { ReactNode, Ref } from "react";
import { Root } from "./styled";
import { Size } from "~/utils/style";

export type Direction = "column" | "row";
export type Align =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-evenly";
export type Justify = Align;

type Props = {
  children: ReactNode;
  direction?: Direction;
  spacing?: Size;
  gap?: Size;
  className?: string;
  align?: Align;
  justify?: Justify;
  wrap?: boolean;
  flex?: number;
  addedRef?: Ref<HTMLDivElement>;
  m?: Size;
  mt?: Size;
  mb?: Size;
  ml?: Size;
  mr?: Size;
  p?: Size;
  pt?: Size;
  pb?: Size;
  pl?: Size;
  pr?: Size;
};

export function Stack({
  children,
  direction = "row",
  spacing,
  gap,
  className,
  align,
  justify,
  wrap,
  flex,
  m,
  mt,
  mb,
  ml,
  mr,
  p,
  pt,
  pb,
  pl,
  pr,
  addedRef,
}: Props) {
  return (
    <Root
      className={className}
      spacing={spacing}
      gap={gap}
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      flex={flex}
      m={m}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
      p={p}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      ref={addedRef}
    >
      {children}
    </Root>
  );
}
