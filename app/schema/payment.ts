import { z } from "zod";

export const paymentMethod = z.object({
  name: z.string(),
  code: z.string(),
  image: z.string(),
  image_alt_text: z.string(),
});

export type PaymentMethod = z.infer<typeof paymentMethod>;
