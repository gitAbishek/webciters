import { RootMenuButton, RootMenuLink } from "./styled";
import { MenuItem } from "~/schema/cmsMenu";

type Props = {
  menu: MenuItem;
  onMouseEnter?: (menu: MenuItem) => void;
  isActive: boolean;
};

export function DesktopRootMenuItem({ menu, onMouseEnter, isActive }: Props) {
  if (menu.items) {
    return (
      <RootMenuButton
        onMouseEnter={() => onMouseEnter && onMouseEnter(menu)}
        isActive={isActive}
      >
        {menu.name}
      </RootMenuButton>
    );
  }

  if (menu.url) {
    return (
      <RootMenuLink
        to={menu.url}
        onMouseEnter={() => onMouseEnter && onMouseEnter(menu)}
        isActive={isActive}
      >
        {menu.name}
      </RootMenuLink>
    );
  }

  return null;
}
