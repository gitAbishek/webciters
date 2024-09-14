import { redirect } from "@remix-run/node";
import { CheckoutLayout } from "~/pages/Checkout/Layout";
import { DataFunctionArgs } from "~/utils/types";
import { commitSession, getSession } from "~/utils/session";
import { clearCartId, getCartId } from "~/utils/cart";
import { ROUTE_CART } from "~/utils/constants";
import { getUserCart } from "~/api/user/cart";
import { unprocessableEntity } from "~/utils/responses";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);
  const id = getCartId(session);

  if (!id) throw redirect(ROUTE_CART);

  try {
    const result = await getUserCart(session, { guid: id });

    if (!result) throw unprocessableEntity();

    return result;
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);

    console.error("cart invalid", e);
    clearCartId(session);
  }

  throw redirect(ROUTE_CART, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export type CheckoutLayoutOutletContextData = Awaited<
  ReturnType<typeof loader>
>;

export default CheckoutLayout;
