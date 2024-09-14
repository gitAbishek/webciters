import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { simplifiedProduct } from "~/schema/product";

const responseShape = z.array(simplifiedProduct);

export const get = createQuery({
  withAuthToken: true,
  path: "/user/wishlist",
  responseShape,
});
