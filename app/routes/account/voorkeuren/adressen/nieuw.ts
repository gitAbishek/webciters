import { AccountAddressDetail } from "~/pages/Account/Preferences/AddressOverview/AddressDetail";

export const loader = async () => ({
  address: {},
});

export type AccountAddressNewPageData = Awaited<ReturnType<typeof loader>>;

export default AccountAddressDetail;
