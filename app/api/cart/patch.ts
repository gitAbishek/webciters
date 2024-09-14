import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";

const bodyParser = z.object({
  new_quantity: z.number().optional(),
  spli_guid: z.string().optional(),
  website_url: z.string(),
  cart_guid: z.string().nullable(),
});

export const patchCartNoUser = createMutation({
  withAuthToken: false,
  path: "/nouser/cart",
  method: "patch",
  bodyParser,
  responseParser: errorOr({ cart_guid: z.string() }),
});

export const patchCartUser = createMutation({
  withAuthToken: true,
  path: "/user/cart",
  method: "patch",
  bodyParser,
  responseParser: errorOr({ cart_guid: z.string() }),
});
