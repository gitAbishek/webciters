import { DataFunctionArgs } from "~/utils/types";
import { postCartValidate } from "~/api/cart/validate";
import { getSession } from "~/utils/session";
import { getCartId } from "~/utils/cart";
import { MessageSchema, unprocessableEntity } from "~/utils/responses";

export async function action({
  request,
}: DataFunctionArgs): Promise<MessageSchema> {
  const session = await getSession(request);
  const cartId = getCartId(session);

  if (!cartId) throw unprocessableEntity();

  const result = await postCartValidate(session, { cart_guid: cartId }, {});

  if (!result.success) {
    return result;
  }

  return {
    success: null,
  };
}
