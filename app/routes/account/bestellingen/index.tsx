import { AccountOrders } from "~/pages/Account/Orders";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { getUserOrders } from "~/api/user/order";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  try {
    return {
      orders: await getUserOrders(session, {}),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type AccountOrdersData = Awaited<ReturnType<typeof loader>>;

export default AccountOrders;
