import { redirect } from "@remix-run/node";
import { Overview } from "~/pages/Checkout/Overview";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { getContactInfo } from "~/api/user/contactInfo";
import { getUserCart } from "~/api/user/cart";
import { unprocessableEntity } from "~/utils/responses";
import { getCartId } from "~/utils/cart";
import {
  ROUTE_CHECKOUT_DETAIL,
  ROUTE_CHECKOUT_PAYMENT,
  ROUTE_CHECKOUT_SHIPPING,
} from "~/utils/constants";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);
  const cartId = getCartId(session);

  if (!cartId) throw unprocessableEntity();

  try {
    const result = await getUserCart(session, { guid: cartId });

    if (!result) throw unprocessableEntity();

    // Check if all required info is set
    if (!result.billing_address || !result.delivery_address) {
      throw redirect(ROUTE_CHECKOUT_DETAIL);
    }

    if (!result.shipping) {
      throw redirect(ROUTE_CHECKOUT_SHIPPING);
    }

    if (!result.payment_details) {
      throw redirect(ROUTE_CHECKOUT_PAYMENT);
    }

    return {
      contactInfo: await getContactInfo(session, {}),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type CheckoutOverviewPageData = Awaited<ReturnType<typeof loader>>;

export default Overview;
