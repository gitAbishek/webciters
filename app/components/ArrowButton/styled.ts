import styled from "@emotion/styled";
import { Link } from "@remix-run/react";
import { Colors } from "~/utils/style";
import { ChevronRightIcon } from "~/components/Icon";

type Props = {
  color: Colors;
};

export const Button = styled.button<Props>`
  color: ${({ color }) => color && `var(--color-${color})`};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: var(--font-weight-medium);
`;

export const LinkBtn = Button.withComponent(Link);

type ArrowProps = {
  arrowPointingLeft?: boolean;
};
export const ArrowIcon = styled(ChevronRightIcon)<ArrowProps>`
  margin-left: -0.4rem;
  ${({ arrowPointingLeft }) =>
    arrowPointingLeft &&
    `
      transform: rotate(180deg);
      margin-right: var(--space-1);
    `}
`;
