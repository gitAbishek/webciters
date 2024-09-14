import { ActionFunction } from "@remix-run/node";
import { AccountAddressOverview } from "~/pages/Account/Preferences/AddressOverview";
import { DataFunctionArgs } from "~/utils/types";
import { get as getAddresses } from "~/api/user/address/get";
import {
  deleteFormInputSchema,
  formInputSchema,
} from "~/pages/Account/Preferences/AddressOverview/schema";
import { put as editDefaultBillingAddress } from "~/api/user/address/defaultBillingAddress/edit/put";
import { put as editDefaultDeliveryAddress } from "~/api/user/address/defaultDeliveryAddress/edit/put";
import { del as deleteAddress } from "~/api/user/address/delete/delete";
import { methodNotAllowed } from "~/utils/responses";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  try {
    return {
      addresses: await getAddresses(session, {}),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type AccountAddressOverviewPageData = Awaited<ReturnType<typeof loader>>;

export const action: ActionFunction = async ({ request }) => {
  try {
    if (request.method === "POST") {
      return await post(request);
    }

    if (request.method === "DELETE") {
      return await del(request);
    }
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }

  throw methodNotAllowed();
};

async function post(request: Request) {
  const session = await getSession(request);
  const formData = await request.formData();

  const { default_billing_address, default_delivery_address } =
    formInputSchema.parse(formData);

  const requests = [];

  if (default_billing_address) {
    requests.push(
      editDefaultBillingAddress(session, { guid: default_billing_address }, {})
    );
  }

  if (default_delivery_address) {
    requests.push(
      editDefaultDeliveryAddress(
        session,
        { guid: default_delivery_address },
        {}
      )
    );
  }

  await Promise.all(requests);
  return {};
}

async function del(request: Request) {
  const session = await getSession(request);
  const formData = await request.formData();

  const { guid } = deleteFormInputSchema.parse(formData);

  const resp = await deleteAddress(session, { guid }, {});

  if (resp.success) {
    return {
      success: "Het adres is verwijderd.",
    };
  }

  return {
    error: resp.error,
  };
}

export default AccountAddressOverview;
