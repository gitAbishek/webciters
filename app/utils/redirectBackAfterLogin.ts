import {
  ROUTE_CHECKOUT_DETAIL,
  ROUTE_LOGIN,
  ROUTE_WISHLIST,
} from "~/utils/constants";

export const REDIRECT_WHITELIST = [ROUTE_WISHLIST, ROUTE_CHECKOUT_DETAIL];

export function loginPathWithReferer(request: Request) {
  const rawReferer = request.headers.get("referer");
  if (!rawReferer) return ROUTE_LOGIN;

  const { pathname } = new URL(rawReferer);

  if (!isNextRouteAllowed(pathname)) return ROUTE_LOGIN;

  return `${ROUTE_LOGIN}?next=${pathname}`;
}

export function isNextRouteAllowed(next: string) {
  return REDIRECT_WHITELIST.includes(next);
}
