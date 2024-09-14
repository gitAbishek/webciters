import { AccountContactInfo } from "~/pages/Account/Preferences/ContactInfo";
import { DataFunctionArgs } from "~/utils/types";
import { getContactInfo } from "~/api/user/contactInfo";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  try {
    return {
      contactInfo: await getContactInfo(session, {}),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type AccountContactInfoPageData = Awaited<ReturnType<typeof loader>>;

export default AccountContactInfo;
