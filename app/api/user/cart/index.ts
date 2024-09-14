import { createQuery } from "~/api/utils.server";
import { userCart } from "~/schema/cart";

export const getUserCart = createQuery({
  withAuthToken: true,
  path: "/user_cart/:guid",
  responseShape: userCart,
});
