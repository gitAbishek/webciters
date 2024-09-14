import { DataFunctionArgs } from "~/utils/types";
import { MessageSchema, unprocessableEntity } from "~/utils/responses";
import { getSession } from "~/utils/session";
import { getCartId } from "~/utils/cart";
import { formInputSchema } from "./schema";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { postPaymentDetails } from "~/api/user/cart/paymentDetail";

export async function action({
  request,
}: DataFunctionArgs): Promise<MessageSchema> {
  const session = await getSession(request);
  const cartId = getCartId(session);

  if (!cartId) throw unprocessableEntity();

  const formData = await request.formData();
  const formValues = formInputSchema.parse(formData);

  try {
    const result = await postPaymentDetails(
      session,
      { ...formValues, cart_guid: cartId },
      {}
    );

    if (!result.success) return result;

    return {
      success: null,
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
}
