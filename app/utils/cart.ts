import { Session } from "@remix-run/node";
import { SESSION_CART_KEY } from "~/utils/constants";
import { SimplifiedProductWithQuantity } from "~/schema/product";

export function getCartId(session: Session) {
  const id: string | undefined = session.get(SESSION_CART_KEY);

  return id || null;
}

export function setCartId(session: Session, id: string) {
  session.set(SESSION_CART_KEY, id);
}

export function clearCartId(session: Session) {
  session.unset(SESSION_CART_KEY);
}

export function getProductQuantitySum(
  products: SimplifiedProductWithQuantity[]
) {
  return products.reduce((sum, product) => sum + product.quantity, 0);
}
