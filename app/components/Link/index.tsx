import { MouseEventHandler, ReactNode } from "react";
import { LinkWrapper, A } from "./styled";
import { Colors } from "~/utils/style";

type Props = {
  children?: ReactNode;
  isUnderlined?: boolean;
  className?: string;
  color?: Colors;
  to: string;
  onMouseEnter?: MouseEventHandler;
};

export type LinkProps = {
  to: string;
  label: string;
};

export function Link({
  isUnderlined = false,
  to,
  className,
  color,
  children,
  onMouseEnter,
}: Props) {
  if (
    to.startsWith("tel:") ||
    to.startsWith("mailto:") ||
    to.startsWith("https://") ||
    to.startsWith("http://") ||
    to.startsWith("//")
  ) {
    return (
      <A
        onMouseEnter={onMouseEnter}
        className={className}
        href={to}
        isUnderlined={isUnderlined}
        color={color}
        target="_blank"
      >
        {children}
      </A>
    );
  }

  return (
    <LinkWrapper
      onMouseEnter={onMouseEnter}
      className={className}
      to={to}
      isUnderlined={isUnderlined}
      color={color}
    >
      {children}
    </LinkWrapper>
  );
}
