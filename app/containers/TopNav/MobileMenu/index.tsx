import { Header, MenuWrappers, Overlay, Root, SubmenuHolder } from "./styled";
import { Heading } from "~/components/Typography";
import { AccessibleButton } from "~/components/AccessibleButton";
import { CloseIcon } from "~/components/Icon";
import { MobileSubmenu } from "../MobileSubmenu";
import { MenuItemListerGroup } from "~/schema/cmsMenu";
import { ImgListerElement } from "~/schema/cmsElements";
import { getAllMenuItems } from "~/containers/TopNav/hooks";

type Props = {
  isOpen: boolean;
  menus: (MenuItemListerGroup | ImgListerElement)[];
  closeMenu: () => void;
};

export function MobileMenu({ isOpen, menus, closeMenu }: Props) {
  return (
    <>
      <Overlay onClick={closeMenu} isOpen={isOpen} />
      <Root isOpen={isOpen}>
        <Header>
          <Heading as="h3">Menu</Heading>
          <AccessibleButton type="button" onClick={closeMenu}>
            <CloseIcon size="md" />
          </AccessibleButton>
        </Header>
        <SubmenuHolder>
          {menus.map(
            (menu) =>
              menu.code === "menu-item-lister" && (
                <MenuWrappers key={menu.id}>
                  {getAllMenuItems(menu).length > 0 &&
                    getAllMenuItems(menu).map((item) => (
                      <MobileSubmenu
                        closeMenu={closeMenu}
                        mainMenuIsOpen={isOpen}
                        key={item.id}
                        menu={item}
                      />
                    ))}
                </MenuWrappers>
              )
          )}
        </SubmenuHolder>
      </Root>
    </>
  );
}
