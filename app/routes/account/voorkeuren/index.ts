import { AccountPreferences } from "~/pages/Account/Preferences";
import { DataFunctionArgs } from "~/utils/types";
import { getContactInfo } from "~/api/user/contactInfo";
import { get as getDefaultDeliveryAddress } from "~/api/user/address/defaultDeliveryAddress/get";
import { get as getDefaultBillingAddress } from "~/api/user/address/defaultBillingAddress/get";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { getNewsletterStatus } from "~/api/user/newsletterStatus";
import { waitParallel } from "~/utils/promise";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  try {
    return await waitParallel({
      contactInfo: getContactInfo(session, {}),
      defaultDeliveryAddress: getDefaultDeliveryAddress(session, {}),
      defaultBillingAddress: getDefaultBillingAddress(session, {}),
      newsletterStatus: getNewsletterStatus(session, {}),
    });
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type AccountPreferencesData = Awaited<ReturnType<typeof loader>>;

export default AccountPreferences;
