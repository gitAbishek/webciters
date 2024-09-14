import styled from "@emotion/styled";
import { FavIcon as FavIconBase } from "~/components/Icon";

type FavIconProps = {
  isActive: boolean;
};

export const FavIcon = styled(FavIconBase)<FavIconProps>`
  color: ${({ isActive }) => isActive && "var(--color-primary)"};

  path {
    fill: ${({ isActive }) => isActive && "currentColor"};
  }
`;
