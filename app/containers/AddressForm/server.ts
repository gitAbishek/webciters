import { ActionFunction } from "@remix-run/node";
import { getSession } from "~/utils/session";
import { formInputSchema } from "~/containers/AddressForm/schema";
import { put as editAddress } from "~/api/user/address/edit/put";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { post as addAddress } from "~/api/user/address/add/post";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const { guid, ...formValues } = formInputSchema.parse(formData);

  const successMessage = `Je adres is ${guid ? "bijgewerkt" : "aangemaakt"}`;

  try {
    const result = guid
      ? await editAddress(
          session,
          { ...formValues, guid, country_code_iso: "NL" },
          {}
        )
      : await addAddress(
          session,
          { ...formValues, country_code_iso: "NL" },
          {}
        );

    if (!result.success) {
      return {
        error: result.error,
      };
    }

    return {
      success: successMessage,
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};
