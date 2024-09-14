import { useState } from "react";
import {
  ContainerWithoutPadding,
  MenuWrapper,
  Root,
  SubmenuContainer,
  SubmenuWrapper,
} from "./styled";
import { DesktopSubmenu } from "~/containers/TopNav/DesktopSubmenu";
import { DesktopRootMenuItem } from "~/containers/TopNav/DesktopRootMenuItem";
import { MenuItemListerGroup, MenuItem } from "~/schema/cmsMenu";
import { ImgListerElement } from "~/schema/cmsElements";
import { getAllMenuItems } from "~/containers/TopNav/hooks";

type Props = {
  menus: (MenuItemListerGroup | ImgListerElement)[];
};

export function DesktopMenu({ menus }: Props) {
  const [activeMenu, setActiveMenu] = useState<null | MenuItem>(null);

  return (
    <Root onMouseLeave={() => setActiveMenu(null)}>
      <ContainerWithoutPadding>
        {menus.map((menu) => (
          <MenuWrapper key={menu.id}>
            {menu.code === "menu-item-lister" &&
              getAllMenuItems(menu).length > 0 &&
              getAllMenuItems(menu).map((item) => (
                <DesktopRootMenuItem
                  key={item.id}
                  isActive={item === activeMenu}
                  menu={item}
                  onMouseEnter={handleMouseEnter}
                />
              ))}
          </MenuWrapper>
        ))}
      </ContainerWithoutPadding>
      {activeMenu && (
        // force remount, we want to lose children state to deactivate active sub menu's
        <SubmenuWrapper>
          <SubmenuContainer>
            <DesktopSubmenu
              closeMenu={() => setActiveMenu(null)}
              key={activeMenu.id}
              menu={activeMenu}
              level={1}
            />
          </SubmenuContainer>
        </SubmenuWrapper>
      )}
    </Root>
  );

  function handleMouseEnter(menu: MenuItem) {
    const newValue = menu.items ? menu : null;
    setActiveMenu(newValue);
  }
}
