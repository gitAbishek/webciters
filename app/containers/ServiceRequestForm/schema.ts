import { z } from "zod";
import { formData, numeric, text } from "~/utils/zodFormHelpers";

export const formInputSchema = formData({
  name: text(z.string()),
  email: text(z.string().email()),
  phone: text(z.string().min(10).nullable()),
  order_number: text(z.string().nullable()),
  service_type: numeric(z.number()),
  service_subject: text(z.string()),
  service_content: text(z.string()),
  files: z.array(z.string()).or(z.string()).optional(),
});
