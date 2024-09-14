import { ReactNode } from "react";
import { HideBox } from "./styled";
import { mq, mqReverse } from "~/utils/style";

export type Props = {
  children: ReactNode;
  minWidth?: keyof typeof mq;
  maxWidth?: keyof typeof mqReverse;
};

export function Hide({ children, minWidth, maxWidth }: Props) {
  return (
    <HideBox minWidth={minWidth} maxWidth={maxWidth}>
      {children}
    </HideBox>
  );
}
