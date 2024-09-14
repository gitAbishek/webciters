import { z } from "zod";
import { formData } from "~/utils/zodFormHelpers";

export const formInputSchema = formData({
  default_billing_address: z.string().optional(),
  default_delivery_address: z.string().optional(),
});

export const deleteFormInputSchema = formData({
  guid: z.string(),
});

export type DeleteFormInputSchema = z.infer<typeof deleteFormInputSchema>;
