import { AccountAddressDetail } from "~/pages/Account/Preferences/AddressOverview/AddressDetail";
import { DataFunctionArgs } from "~/utils/types";
import { getDetail as getAddress } from "~/api/user/address/get";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";

export const loader = async ({ request, params }: DataFunctionArgs) => {
  const session = await getSession(request);
  const { id } = params;

  try {
    return {
      address: await getAddress(session, { guid: id! }),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type AccountAddressDetailPageData = Awaited<ReturnType<typeof loader>>;

export default AccountAddressDetail;
