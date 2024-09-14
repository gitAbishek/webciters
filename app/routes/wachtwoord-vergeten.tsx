import { ActionFunction } from "@remix-run/node";
import { PasswordForgot } from "~/pages/PasswordForgot";
import { formInputSchema } from "~/pages/PasswordForgot/schema";
import { postForgotPassword } from "~/api/user/forgotPassword";
import { getSession } from "~/utils/session";

export default PasswordForgot;

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = formInputSchema.parse(formData);

  await postForgotPassword(session, formValues, {});

  return {
    success: `Er is een email onderweg naar ${formValues.email}. Hierin vind je een link om je wachtwoord in te stellen.`,
  };
};
