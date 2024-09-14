import { Account } from "~/pages/Account";
import { getContactInfo } from "~/api/user/contactInfo";
import { get as getDefaultDeliveryAddress } from "~/api/user/address/defaultDeliveryAddress/get";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { getNewsletterStatus } from "~/api/user/newsletterStatus";
import { waitParallel } from "~/utils/promise";
import { getUserOrders } from "~/api/user/order";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  try {
    return await waitParallel({
      orders: getUserOrders(session, {}),
      newsletterStatus: getNewsletterStatus(session, {}),
      contactInfo: getContactInfo(session, {}),
      defaultDeliveryAddress: getDefaultDeliveryAddress(session, {}),
    });
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type AccountPageData = Awaited<ReturnType<typeof loader>>;

export default Account;
