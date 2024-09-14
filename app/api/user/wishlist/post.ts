import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";
import { bodyShape } from "~/api/user/wishlist/shared";

const responseParser = errorOr({});

export const post = createMutation({
  path: "/user/wishlist/add",
  bodyParser: bodyShape,
  responseParser,
  withAuthToken: true,
  method: "post",
});
