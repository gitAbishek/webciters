import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { get as getAddresses } from "~/api/user/address/get";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { Detail } from "~/pages/Checkout";
import { getContactInfo } from "~/api/user/contactInfo";
import { waitParallel } from "~/utils/promise";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  try {
    return await waitParallel({
      addresses: getAddresses(session, {}),
      contactInfo: getContactInfo(session, {}),
    });
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type CheckoutDetailPageData = Awaited<ReturnType<typeof loader>>;

export default Detail;
