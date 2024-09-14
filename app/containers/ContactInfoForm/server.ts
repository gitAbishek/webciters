import { ActionFunction } from "@remix-run/node";
import { getSession } from "~/utils/session";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { formInputSchema } from "./schema";
import { putContactInfo } from "~/api/user/contactInfo";
import { MessageSchema } from "~/utils/responses";

export const action: ActionFunction = async ({
  request,
}): Promise<MessageSchema> => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = formInputSchema.parse(formData);

  try {
    const result = await putContactInfo(session, formValues, {});

    if (!result.success) return result;

    return {
      success: "Je persoonlijke gegevens zijn bijgewerkt.",
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};
