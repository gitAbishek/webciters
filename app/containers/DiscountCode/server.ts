import { ActionFunction } from "@remix-run/node";
import { getSession } from "~/utils/session";
import { getCartId } from "~/utils/cart";
import { unprocessableEntity } from "~/utils/responses";
import { formInputSchema } from "./schema";
import { postCoupon } from "~/api/cart/coupon";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const cartId = getCartId(session);

  if (!cartId) {
    throw unprocessableEntity();
  }

  const formData = await request.formData();
  const { discount_code } = formInputSchema.parse(formData);

  const result = await postCoupon(
    session,
    {
      discount_code,
      cart_guid: cartId,
    },
    {}
  );

  if (!result.success) {
    return {
      error: result.error,
    };
  }

  return {};
};
