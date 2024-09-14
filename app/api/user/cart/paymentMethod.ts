import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { paymentMethod } from "~/schema/payment";

const getPaymentMethodResponseSchema = z.object({
  guid: z.string(),
  payment_methods: z.array(paymentMethod),
});

export const getPaymentMethods = createQuery({
  withAuthToken: true,
  path: "/user_cart_payment_method/:guid",
  responseShape: getPaymentMethodResponseSchema,
});
