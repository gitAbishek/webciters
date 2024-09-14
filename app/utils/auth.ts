import { redirect, Session } from "@remix-run/node";
import { commitSession, getSession } from "~/utils/session";
import { SESSION_TOKEN_KEY } from "~/utils/constants";
import { patchCartUser } from "~/api/cart/patch";
import { getCartId, setCartId } from "~/utils/cart";
import { IsUnAuthenticated } from "~/api/errors";
import { loginPathWithReferer } from "~/utils/redirectBackAfterLogin";
import { getRequiredEnv } from "~/utils/env";

export async function getToken(session: Session) {
  const token: string | undefined = session.get(SESSION_TOKEN_KEY);

  return token;
}

export async function hasAuthToken(session: Session) {
  return session.has(SESSION_TOKEN_KEY);
}

export function setToken(session: Session, token: string) {
  session.set(SESSION_TOKEN_KEY, token);
}

export function unsetToken(session: Session) {
  session.unset(SESSION_TOKEN_KEY);
}

export async function clearTokenAndRedirectWhenUnauthenticated(
  error: unknown,
  request: Request
) {
  if (!(error instanceof IsUnAuthenticated)) return;

  const session = await getSession(request);

  unsetToken(session);

  throw redirect(loginPathWithReferer(request), {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

// By making an authenticated patch call on the cart the backend will assign the cart to the authenticated user

export async function connectCartWithUser(session: Session) {
  const cartId = getCartId(session);

  const result = await patchCartUser(
    session,
    {
      cart_guid: cartId,
      website_url: getRequiredEnv("WEBSITE_URL"),
    },
    {}
  );

  if (result.success) {
    setCartId(session, result.response.cart_guid);
  }
}
