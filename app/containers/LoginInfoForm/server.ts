import { ActionFunction } from "@remix-run/node";
import { getSession } from "~/utils/session";
import { changePassword } from "~/api/user/changePassword/post";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { formInputShape } from "./schema";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = formInputShape.parse(formData);

  try {
    const result = await changePassword(session, formValues, {});

    if (!result.success) {
      return {
        error: result.error,
      };
    }

    return {
      success: "Je inloggegevens zijn bijgewerkt.",
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};
