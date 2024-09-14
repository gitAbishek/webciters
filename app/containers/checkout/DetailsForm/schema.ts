import { z } from "zod";
import { formData, text } from "~/utils/zodFormHelpers";

export const formInputSchema = formData({
  first_name: text(z.string()),
  prefix_surname: text(z.string().nullable()),
  surname: text(z.string()),
  telephone: text(z.string().nullable()),
  gender: z.enum(["Male", "Female"]).nullable(),
  delivery_address_guid: z.string(),
  billing_address_guid: z.string(),
  email: text(z.string().optional()),
});
