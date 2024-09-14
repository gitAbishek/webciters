import { ActionFunction, json } from "@remix-run/node";
import { commitSession, getSession } from "~/utils/session";
import { patchFetchInput } from "~/containers/Cart/schema";
import { getCartId, setCartId } from "~/utils/cart";
import { hasAuthToken } from "~/utils/auth";
import { patchCartNoUser, patchCartUser } from "~/api/cart/patch";
import { MessageSchema } from "~/utils/responses";
import { getRequiredEnv } from "~/utils/env";

export const action: ActionFunction = async ({
  request,
}): Promise<MessageSchema | Response> => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = patchFetchInput.parse(formData);

  const cartGuid = getCartId(session);

  const data = {
    ...formValues,
    website_url: getRequiredEnv("WEBSITE_URL"),
    cart_guid: cartGuid,
  } as const;

  const result = await ((await hasAuthToken(session))
    ? patchCartUser(session, data, {})
    : patchCartNoUser(session, data, {}));

  if (!result.success) {
    return result;
  }

  setCartId(session, result.response.cart_guid);

  return json(
    {
      success: null,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};
