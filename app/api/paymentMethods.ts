import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { paymentMethod } from "~/schema/payment";

export const getPaymentMethods = createQuery({
  withAuthToken: false,
  path: "/payment_methods?website_url=:websiteUrl",
  responseShape: z.array(paymentMethod),
});
