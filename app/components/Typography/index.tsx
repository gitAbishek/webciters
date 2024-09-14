import { ReactNode } from "react";
import { Variants } from "~/components/Typography/styled";
import { Size, Colors, Weights } from "~/utils/style";

export { Heading } from "~/components/Typography/heading";
export { Text } from "~/components/Typography/text";

export { variants } from "./styled";

export type BaseProps = {
  children: ReactNode;
  variant?: Variants;
  className?: string;
  mt?: Size;
  mb?: Size;
  color?: Colors;
  weight?: Weights;
  id?: string;
};
