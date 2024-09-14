import { z } from "zod";

export const address = z.object({
  house_number: z.number(),
  house_number_appendix: z.string().nullable(),
  postal_code: z.string(),
  guid: z.string(),
  street: z.string(),
  city: z.string(),
});

export type Address = z.infer<typeof address>;

export const addressWithDefault = address.merge(
  z.object({
    default_billing_address: z.boolean(),
    default_delivery_address: z.boolean(),
  })
);

export type AddressWithDefault = z.infer<typeof addressWithDefault>;
