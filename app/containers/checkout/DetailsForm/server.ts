import { ActionFunction } from "@remix-run/node";
import { getSession } from "~/utils/session";
import { formInputSchema } from "./schema";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { putContactInfo } from "~/api/user/contactInfo";
import { postDeliveryInfo } from "~/api/user/cart/deliveryInfo";
import { getCartId } from "~/utils/cart";
import { unprocessableEntity } from "~/utils/responses";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = formInputSchema.parse(formData);

  const cartId = getCartId(session);

  if (!cartId) throw unprocessableEntity();

  try {
    const contactInfoResult = await putContactInfo(session, formValues, {});

    if (!contactInfoResult.success) {
      return {
        error: contactInfoResult.error,
      };
    }

    const deliveryInfoResult = await postDeliveryInfo(
      session,
      { ...formValues, cart_guid: cartId },
      {}
    );

    if (!deliveryInfoResult.success) {
      return {
        error: deliveryInfoResult.error,
      };
    }

    return { success: null };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};
