import { createQuery } from "~/api/utils.server";
import { cart } from "~/schema/cart";

export const getCart = createQuery({
  responseShape: cart,
  withAuthToken: false,
  path: "/cart/:guid",
});
