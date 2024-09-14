import { redirect } from "@remix-run/node";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { getCartId } from "~/utils/cart";
import { MessageSchema, unprocessableEntity } from "~/utils/responses";
import { postCartStartPayment } from "~/api/user/startPayment";
import { getClientIp } from "~/utils/getClientIp";

export async function action({
  request,
}: DataFunctionArgs): Promise<MessageSchema> {
  const session = await getSession(request);
  const cartId = getCartId(session);

  if (!cartId) throw unprocessableEntity();

  const userIpAddress = getClientIp(request);

  const result = await postCartStartPayment(
    session,
    { cart_guid: cartId, user_ip_address: userIpAddress },
    {}
  );

  if (!result.success) {
    return result;
  }

  throw redirect(result.response.redirect_url);
}
