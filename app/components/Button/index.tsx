import { ReactNode } from "react";
import { Btn, Variants } from "~/components/Button/styled";
import { Link as LinkBase } from "~/components/Link";

export type Sizes = "sm" | "md";

type BaseProps = {
  children: ReactNode;
  variant?: Variants;
  size?: Sizes;
  className?: string;
  isLoading?: boolean;
};

type LinkButtonProps = BaseProps & {
  to: string;
};

export function LinkButton({
  children,
  to,
  variant = "primary",
  size = "md",
  className,
  isLoading,
}: LinkButtonProps) {
  const Link = Btn.withComponent(LinkBase);

  return (
    <Link
      className={className}
      size={size}
      variant={variant}
      to={to}
      isLoading={isLoading}
    >
      {children}
    </Link>
  );
}

export type ButtonProps = BaseProps & {
  onClick?: () => void;
  type?: "submit" | "button";
  form?: string;
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type,
  isLoading,
  form,
  disabled,
}: ButtonProps) {
  return (
    <Btn
      onClick={onClick}
      className={className}
      size={size}
      variant={variant}
      type={type}
      isLoading={isLoading}
      form={form}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
}
