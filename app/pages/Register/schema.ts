import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";
import { checkbox, formData, text } from "~/utils/zodFormHelpers";
import { password } from "~/schema/field";

export const formInputSchema = formData({
  email: text(z.string().email()),
  organization_name: text(z.string().nullable()),
  first_name: text(z.string()),
  prefix_surname: text(z.string().nullable()),
  surname: text(z.string()),
  password: text(password),
  password_confirm: text(z.string()),
  subscription_status: checkbox(),
}).refine((data) => data.password === data.password_confirm, {
  message: "Wachtwoorden komen niet overeen",
  path: ["password_confirm"], // path of error
});

export const formInputValidator = withZod(formInputSchema);
