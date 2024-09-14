import { z } from "zod";
import { formData, text, numeric } from "~/utils/zodFormHelpers";
import { postalCode } from "~/utils/regex";

export const inputSchema = z.object({
  guid: text(z.string().nullable()),
  street: text(z.string()),
  house_number: numeric(z.number()),
  house_number_appendix: text(z.string().nullable()),
  postal_code: text(
    z.string().regex(postalCode, "Er is geen geldige postcode ingevuld.")
  ),
  city: text(z.string()),
});

export const formInputSchema = formData(inputSchema);

export const zipcodeFormInputSchema = formData(
  inputSchema.pick({
    house_number: true,
    house_number_appendix: true,
    postal_code: true,
  })
);
