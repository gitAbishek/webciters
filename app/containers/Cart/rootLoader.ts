import { Session } from "@remix-run/node";
import { clearCartId, getCartId } from "~/utils/cart";
import { getCart } from "~/api/cart";
import { NovuloIsUpdating } from "~/api/errors";

export async function rootLoader(session: Session) {
  const cartId = await getCartId(session);

  try {
    if (cartId) {
      return await getCart(session, { guid: cartId });
    }
  } catch (e) {
    if (e instanceof NovuloIsUpdating) return null;
    console.error("cart invalid", e);
    clearCartId(session);
  }

  return null;
}
