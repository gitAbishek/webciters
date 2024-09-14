import { ActionFunction } from "@remix-run/node";
import { AccountNewsletterStatus } from "~/pages/Account/Preferences/NewsletterStatus";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import {
  getNewsletterStatus,
  putNewsletterStatus,
} from "~/api/user/newsletterStatus";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { formInputSchema } from "~/pages/Account/Preferences/NewsletterStatus/schema";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  try {
    return {
      newsletterStatus: await getNewsletterStatus(session, {}),
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = formInputSchema.parse(formData);

  try {
    const result = await putNewsletterStatus(session, formValues, {});

    if (!result.success) {
      return {
        error: result.error,
      };
    }

    return {
      success: "Je voorkeuren zijn bijgewerkt.",
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

export type AccountNewsletterStatusPageData = Awaited<
  ReturnType<typeof loader>
>;

export default AccountNewsletterStatus;
