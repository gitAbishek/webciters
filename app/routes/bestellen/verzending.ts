import { Shipping } from "~/pages/Checkout/Shipping";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { getCartId } from "~/utils/cart";
import { unprocessableEntity } from "~/utils/responses";
import { determineDeliveryMethods } from "~/api/cart/determineDeliveryMethods";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);
  const cartId = getCartId(session);

  if (!cartId) throw unprocessableEntity();

  const deliveryMethods = await determineDeliveryMethods(
    session,
    { cart_guid: cartId },
    {}
  );

  if (!deliveryMethods.success) {
    throw unprocessableEntity(deliveryMethods.error);
  }

  return {
    deliveryMethods: deliveryMethods.response.delivery_methods,
  };
};

export type CheckoutShippingPageData = Awaited<ReturnType<typeof loader>>;

export default Shipping;
