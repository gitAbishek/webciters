import { z } from "zod";

export const shippingMethod = z.object({
  id: z.number(),
  price: z.number(),
  description: z.string(),
  subtitle: z.string(),
});

export type ShippingMethod = z.infer<typeof shippingMethod>;
