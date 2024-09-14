import { useEffect, useState } from "react";
import { GoBack, MenuWrapper, Submenu } from "./styled";
import { Heading, Text } from "~/components/Typography";
import { ChevronLeftIcon } from "~/components/Icon";
import { Container } from "~/components/Container";
import { MenuItemRow } from "~/containers/TopNav/MenuItemRow";
import { EverythingIn } from "~/containers/TopNav/EverythingIn";
import { MenuItem } from "~/schema/cmsMenu";

export type Props = {
  menu: MenuItem;
  closeMenu: () => void;
  mainMenuIsOpen: boolean;
};

export function MobileSubmenu({ menu, closeMenu, mainMenuIsOpen }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!mainMenuIsOpen) {
      setIsOpen(false);
    }
  }, [mainMenuIsOpen]);
  return (
    <>
      <MenuItemRow
        menu={menu}
        closeMenu={closeMenu}
        onClick={handleMenuItemRowClick}
      />
      <Submenu isOpen={isOpen}>
        <Container>
          <GoBack type="submit" onClick={() => setIsOpen(false)}>
            <ChevronLeftIcon size="sm" />
            <Text variant="md" weight="medium">
              Ga terug
            </Text>
          </GoBack>
          <Heading as="h2">{menu.name}</Heading>
        </Container>
        {menu.items && (
          <MenuWrapper>
            <EverythingIn closeMenu={closeMenu} menu={menu} />
            {menu.items.map((item) => (
              <MobileSubmenu
                closeMenu={closeMenu}
                mainMenuIsOpen={mainMenuIsOpen}
                key={item.name}
                menu={item}
              />
            ))}
          </MenuWrapper>
        )}
      </Submenu>
    </>
  );

  function handleMenuItemRowClick(pressedMenuItem: MenuItem) {
    setIsOpen(!!pressedMenuItem.items);
  }
}
