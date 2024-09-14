import styled from "@emotion/styled";

import { Colors } from "~/utils/style";

const sizes = {
  sm: "1.6rem",
  md: "2.4rem",
};

type Props = {
  size?: keyof typeof sizes;
  color?: Colors;
  className?: string;
};

export const IconSvg = styled.svg<Props>`
  width: ${({ size }) => (size ? sizes[size] : "1em")};
  min-width: ${({ size }) => (size ? sizes[size] : "1em")};
  height: ${({ size }) => (size ? sizes[size] : "1em")};
  min-height: ${({ size }) => (size ? sizes[size] : "1em")};
  color: ${({ color }) => color && `var(--color-${color})`};
`;

type ViewBox = 16 | 20 | 24 | 40;

export function iconify(viewBox: ViewBox, jsx: JSX.Element) {
  return function Icon({ size, color, className }: Props) {
    return (
      <IconSvg
        className={className}
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        size={size}
        color={color}
      >
        {jsx}
      </IconSvg>
    );
  };
}
