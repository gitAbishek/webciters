import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { order } from "~/schema/order";
import { firstItemOrNull } from "~/schema/helpers";

export const getUserOrders = createQuery({
  withAuthToken: true,
  path: "/user-order",
  responseShape: z.array(order),
});

export const getUserOrder = createQuery({
  withAuthToken: true,
  path: "/user-order/:guid",
  responseShape: order,
});

export const getUserOrderByPaymentGuid = createQuery({
  withAuthToken: true,
  path: "/user-order?payment_guid=:paymentGuid",
  responseShape: z.array(order).transform(firstItemOrNull),
});
