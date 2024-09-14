import { useState } from "react";
import { MenuItemListerGroup } from "~/schema/cmsMenu";
import { ImgListerElement } from "~/schema/cmsElements";
import { MenuWrapper } from "~/pages/CmsPage/groups/Menu/MobileMenu/styled";
import { MenuItemLister } from "./MenuItemLister";
import { ImgLister } from "./ImgLister";

type Props = {
  menus: (MenuItemListerGroup | ImgListerElement)[];
};

export function MobileMenu({ menus }: Props) {
  const [activeMenuId, setActiveMenuId] = useState<null | number>(null);

  return (
    <MenuWrapper>
      {menus.map((menu) => {
        if (menu.code === "menu-item-lister") {
          return (
            <MenuItemLister
              key={menu.id}
              data={menu}
              toggleHandler={toggleHandler}
              activeMenuId={activeMenuId}
            />
          );
        }

        if (menu.code === "img-lister") {
          return <ImgLister key={menu.id} data={menu} />;
        }

        return null;
      })}
    </MenuWrapper>
  );

  function toggleHandler(menuTitle: number) {
    const isSameToggleBox = activeMenuId === menuTitle;

    setActiveMenuId(isSameToggleBox ? null : menuTitle);
  }
}
