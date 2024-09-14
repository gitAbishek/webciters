import { MenuItemRow } from "~/containers/TopNav/MenuItemRow";
import { MenuItem } from "~/schema/cmsMenu";

type Props = {
  menu: MenuItem;
  closeMenu: () => void;
};

export function EverythingIn({ menu, closeMenu }: Props) {
  // If the menu does not have an own page we cannot show an "Everything in shoes" for example.
  if (!menu.url) return null;

  return (
    <MenuItemRow
      closeMenu={closeMenu}
      menu={{
        id: 0,
        url: menu.url,
        name: `Alles in ${menu.name}`,
        isBold: true,
      }}
    />
  );
}
