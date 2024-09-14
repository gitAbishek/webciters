import { Payment } from "~/pages/Checkout/Payment";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { getCartId } from "~/utils/cart";
import { notFound } from "~/utils/responses";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { getPaymentMethods } from "~/api/user/cart/paymentMethod";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);
  const cartId = getCartId(session);

  if (!cartId) throw notFound();

  try {
    return {
      paymentMethods: await getPaymentMethods(session, { guid: cartId }),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type CheckoutPaymentPageData = Awaited<ReturnType<typeof loader>>;

export default Payment;
