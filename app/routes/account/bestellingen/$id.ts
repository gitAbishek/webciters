import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { getUserOrder } from "~/api/user/order";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { AccountOrderDetail } from "~/pages/Account/Orders/OrderDetail";
import { NotFound } from "~/api/errors";
import { notFound } from "~/utils/responses";

export const loader = async ({ request, params }: DataFunctionArgs) => {
  const session = await getSession(request);

  const guid = params.id!;

  try {
    return {
      order: await getUserOrder(session, { guid }),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);

    if (e instanceof NotFound) {
      throw notFound();
    }

    throw e;
  }
};

export type AccountOrderDetailData = Awaited<ReturnType<typeof loader>>;

export default AccountOrderDetail;
