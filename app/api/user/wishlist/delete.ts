import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";
import { bodyShape } from "./shared";

const responseParser = errorOr({});

export const del = createMutation({
  path: "/user/wishlist/delete",
  bodyParser: bodyShape,
  responseParser,
  withAuthToken: true,
  method: "delete",
});
