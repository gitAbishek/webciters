import { z } from "zod";
import { simplifiedProductWithQuantity } from "./product";
import { address } from "~/schema/address";
import { firstItemOrNull } from "~/schema/helpers";
import { paymentMethod } from "~/schema/payment";
import { shippingMethod } from "~/schema/shipping";

export const cart = z.object({
  guid: z.string(),
  products: z.array(simplifiedProductWithQuantity),
  subtotal_excl_shipping: z.number(),
  total_discount: z.number(),
  total_price_incl_discount: z.number(),
  shipping: z.array(shippingMethod).transform(firstItemOrNull),
  discount_codes: z.array(
    z.object({
      code: z.string(),
      discount_price: z.number(),
    })
  ),
});

export type Cart = z.infer<typeof cart>;

// Cart that is being called as authenticated user that contains more (sensitive) information
export const userCart = cart.merge(
  z.object({
    payment_details: z.array(paymentMethod).transform(firstItemOrNull),
    delivery_address: z.array(address).transform(firstItemOrNull),
    billing_address: z.array(address).transform(firstItemOrNull),
  })
);

export type UserCart = z.infer<typeof userCart>;
