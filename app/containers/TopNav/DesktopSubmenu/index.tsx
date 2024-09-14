import { useState } from "react";
import { Title, Root } from "./styled";
import { MenuItemRow } from "~/containers/TopNav/MenuItemRow";
import { EverythingIn } from "~/containers/TopNav/EverythingIn";
import { MenuItem } from "~/schema/cmsMenu";

type Props = {
  menu: MenuItem;
  closeMenu: () => void;
  level: number;
};

export function DesktopSubmenu({ menu, closeMenu, level }: Props) {
  const [activeMenu, setActiveMenu] = useState<null | MenuItem>(null);
  const isLevelTwo = level >= 2;

  return (
    <>
      <Root>
        <Title as="h3" variant="lg">
          {menu.name}
        </Title>
        <EverythingIn closeMenu={closeMenu} menu={menu} />
        {menu.items?.map((item) => (
          <MenuItemRow
            key={item.name}
            onMouseEnter={handleMouseEnter}
            menu={item}
            closeMenu={closeMenu}
            isMoreSpacing={isLevelTwo}
          />
        ))}
      </Root>
      {activeMenu && (
        // force remount, we want to lose children state to deactivate active sub menu's
        <DesktopSubmenu
          closeMenu={closeMenu}
          key={activeMenu.name}
          menu={activeMenu}
          level={level + 1}
        />
      )}
    </>
  );

  function handleMouseEnter(enteredMenuItem: MenuItem) {
    const newValue = enteredMenuItem.items ? enteredMenuItem : null;
    setActiveMenu(newValue);
  }
}
