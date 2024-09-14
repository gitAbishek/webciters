import { MenuItemListerGroup } from "~/schema/cmsMenu";
import { ImgListerElement } from "~/schema/cmsElements";
import { MenuItemLister } from "./MenuItemLister";
import { ImgLister } from "./ImgLister";
import { Root } from "./styled";

type Props = {
  menus: (MenuItemListerGroup | ImgListerElement)[];
};

export function DesktopMenu({ menus }: Props) {
  return (
    <Root>
      {menus.map((menu) => {
        if (menu.code === "menu-item-lister") {
          return <MenuItemLister key={menu.id} data={menu} />;
        }

        if (menu.code === "img-lister") {
          return <ImgLister key={menu.id} data={menu} />;
        }

        return null;
      })}
    </Root>
  );
}
