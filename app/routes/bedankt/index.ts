import { redirect } from "@remix-run/node";
import { OrderThankYou } from "~/pages/OrderThankYou";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { getUserOrderByPaymentGuid } from "~/api/user/order";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { notFound } from "~/utils/responses";
import { ROUTE_ACCOUNT_ORDERS } from "~/utils/constants";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  const url = new URL(request.url);
  const paymentGuid = url.searchParams.get("orderId")!;
  const statusId = url.searchParams.get("orderStatusId");

  if (statusId !== "100")
    throw redirect(`${ROUTE_ACCOUNT_ORDERS}?success=false`);

  try {
    const order = await getUserOrderByPaymentGuid(session, {
      paymentGuid,
    });

    if (!order) throw notFound();

    return { order };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);

    throw e;
  }
};

export type OrderThankYouData = Awaited<ReturnType<typeof loader>>;

export default OrderThankYou;
