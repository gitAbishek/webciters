import { z } from "zod";
import { contactInfo } from "~/schema/contactInfo";
import { address } from "~/schema/address";
import { simplifiedProductWithQuantity } from "~/schema/product";
import { firstItem, firstItemOrNull } from "~/schema/helpers";

export const order = z.object({
  payment_url: z.string().nullable(),
  order_number: z.string(),
  total_amount_incl_tax: z.number(),
  total_amount: z.number(),
  order_date: z.string(),
  payment_method: z.string(),
  shipping_method: z.string().optional(),
  shipping_method_subtitle: z.string().optional(),
  guid: z.string(),
  products: z.array(simplifiedProductWithQuantity),
  shipping_costs: z.number(),
  customer_info: z.array(contactInfo).nonempty().transform(firstItem),
  delivery_address: z.array(address).transform(firstItemOrNull), // can be null for bought in store
  billing_address: z.array(address).transform(firstItemOrNull), // can be null for bought in store
  discounts: z.array(
    z.object({
      description: z.string(),
      price: z.number(),
    })
  ),
  order_status: z.string(),
  invoices: z.array(
    z.object({
      file_name: z.string(),
      guid: z.string(),
    })
  ),
});

export type Order = z.infer<typeof order>;
