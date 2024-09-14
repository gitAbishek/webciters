import { ChevronRightIcon } from "~/components/Icon";
import { AsLink, AsButton } from "./styled";
import { MenuItem } from "~/schema/cmsMenu";

type Props = {
  menu: MenuItem & { isBold?: boolean };
  onClick?: (menu: MenuItem) => void;
  onMouseEnter?: (menu: MenuItem) => void;
  isBold?: boolean;
  closeMenu: () => void;
  isMoreSpacing?: boolean;
};

export function MenuItemRow({
  menu,
  onClick,
  onMouseEnter,
  closeMenu,
  isMoreSpacing,
}: Props) {
  if (menu.items) {
    return (
      <AsButton
        onClick={() => onClick && onClick(menu)}
        onMouseEnter={() => onMouseEnter && onMouseEnter(menu)}
        isBold={!!menu.isBold}
        isMoreSpacing={isMoreSpacing}
      >
        <span>{menu.name}</span>
        <ChevronRightIcon size="sm" />
      </AsButton>
    );
  }

  if (menu.url) {
    return (
      <AsLink
        onClick={closeMenu}
        to={menu.url}
        isBold={!!menu.isBold}
        isMoreSpacing={isMoreSpacing}
      >
        {menu.name}
      </AsLink>
    );
  }

  return null;
}
