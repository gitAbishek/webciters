import { ReactNode } from "react";
import { ArrowIcon, Button, LinkBtn } from "./styled";
import { Colors } from "~/utils/style";

type BaseProps = {
  children: ReactNode;
  className?: string;
  color?: Colors;
};

type ArrowButtonProps = BaseProps & {
  onClick: () => void;
  arrowPointingLeft?: boolean;
};

export function ArrowButton({
  children,
  className,
  onClick,
  color = "black",
  arrowPointingLeft,
}: ArrowButtonProps) {
  return (
    <Button type="button" color={color} className={className} onClick={onClick}>
      <ArrowIcon size="sm" arrowPointingLeft={arrowPointingLeft} />
      {children}
    </Button>
  );
}

type LinkArrowButtonProps = BaseProps & {
  to: string;
  target?: "_blank";
  arrowPointingLeft?: boolean;
};

export function LinkArrowButton({
  children,
  className,
  to,
  color = "black",
  target,
  arrowPointingLeft = false,
}: LinkArrowButtonProps) {
  return (
    <LinkBtn color={color} target={target} className={className} to={to}>
      <ArrowIcon size="sm" arrowPointingLeft={arrowPointingLeft} />
      {children}
    </LinkBtn>
  );
}
