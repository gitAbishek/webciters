import { ActionFunction } from "@remix-run/node";
import { formInputSchema } from "./schema";
import { getSession } from "~/utils/session";
import { postNewsletterSignup } from "~/api/newsletterSignup";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = await formInputSchema.parseAsync(formData);

  const result = await postNewsletterSignup(session, formValues, {});

  if (!result.success) {
    return {
      error: result.error,
    };
  }

  return {
    success: `Je ontvangt binnen enkele minuten een e-mail op ${formValues.email}. Hierin vind je een link om je inschrijving mee te bevestigen.`,
  };
};
