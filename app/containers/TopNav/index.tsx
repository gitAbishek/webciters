import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  Nav,
  Main,
  OpenMenuButton,
  IconWrapper,
  SearchDesktop,
  SearchMobile,
  LogoWrapper,
  LinkWithCheckmark,
  LinkWithCount,
} from "./styled";
import logo from "~/resources/images/logo.svg";
import { BasketIcon, FavIcon, MenuIcon, UserIcon } from "~/components/Icon";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "~/containers/TopNav/DesktopMenu";
import {
  ROUTE_ACCOUNT,
  ROUTE_CART,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_WISHLIST,
} from "~/utils/constants";
import { useCart } from "~/containers/Cart/hooks";
import { getProductQuantitySum } from "~/utils/cart";
import { useIsLoggedIn } from "~/containers/IsLoggedIn/hooks";
import { useWishlistFetcher } from "~/containers/WishlistFavorite/hooks";
import { useTopNavData } from "~/containers/TopNav/hooks";

/**
 * Welcome to this beast
 * The Mobile menu html renders all html upfront for SEO reasons and only hidden by translateX that goes outside the viewport
 * The Desktop menu renders conditionally which makes the design and hover methods fairly simple.
 */

type Props = {
  onFocusChange: (isFocused: boolean) => void;
};

export function TopNav({ onFocusChange }: Props) {
  const topNavData = useTopNavData();
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart();
  const isLoggedIn = useIsLoggedIn();
  const { wishlistIds } = useWishlistFetcher();

  const cartCount = cart
    ? maxHumanizedCount(getProductQuantitySum(cart.products))
    : undefined;

  return (
    <Nav>
      <Main>
        <OpenMenuButton type="button" onClick={() => setIsOpen(true)}>
          <MenuIcon size="md" />
        </OpenMenuButton>
        <LogoWrapper to={ROUTE_HOME}>
          <img src={logo} alt="Logo" />
        </LogoWrapper>
        <SearchDesktop onFocusChange={onFocusChange} />
        <IconWrapper spacing={3}>
          {isLoggedIn ? (
            <LinkWithCheckmark to={ROUTE_ACCOUNT}>
              <UserIcon size="md" />
            </LinkWithCheckmark>
          ) : (
            <Link to={ROUTE_LOGIN}>
              <UserIcon size="md" />
            </Link>
          )}
          <LinkWithCount
            to={ROUTE_WISHLIST}
            count={maxHumanizedCount(wishlistIds.length)}
          >
            <FavIcon size="md" />
          </LinkWithCount>
          <LinkWithCount to={ROUTE_CART} count={cartCount}>
            <BasketIcon size="md" />
          </LinkWithCount>
        </IconWrapper>
      </Main>
      <SearchMobile onFocusChange={onFocusChange} />
      {topNavData && (
        <>
          <MobileMenu
            closeMenu={() => {
              setIsOpen(false);
            }}
            isOpen={isOpen}
            menus={topNavData.elements}
          />
          <DesktopMenu menus={topNavData.elements} />
        </>
      )}
    </Nav>
  );
}

function maxHumanizedCount(num: number) {
  if (num > 99) {
    return "99+";
  }

  return num;
}
