import styled from "@emotion/styled";
import { Link } from "@remix-run/react";
import { Colors } from "~/utils/style";

type Prop = {
  isUnderlined: boolean;
  color?: Colors;
};

export const A = styled("a", {
  shouldForwardProp: (props) => props !== "isUnderlined",
})<Prop>`
  font-weight: var(--font-weight-medium);
  text-decoration: ${({ isUnderlined }) => isUnderlined && "underline"};
  text-decoration-color: ${({ color }) => color && `var(--color-${color})`};
  text-underline-offset: 0.2rem;
  position: relative;
  color: ${({ color }) => color && `var(--color-${color})`};
`;

export const LinkWrapper = A.withComponent(Link);
