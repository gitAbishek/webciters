import { ActionFunction } from "@remix-run/node";
import { getSession } from "~/utils/session";
import { wishlistFormInput } from "./schema";
import { post as postWishlist } from "~/api/user/wishlist/post";
import { del as deleteWishlist } from "~/api/user/wishlist/delete";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { MessageSchema, methodNotAllowed } from "~/utils/responses";
import { getRequiredEnv } from "~/utils/env";

export const action: ActionFunction = async ({
  request,
}): Promise<MessageSchema> => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = wishlistFormInput.parse(formData);

  const valuesWithWebsiteUrl = {
    ...formValues,
    website_url: getRequiredEnv("WEBSITE_URL"),
  };

  try {
    if (request.method === "POST") {
      await postWishlist(session, valuesWithWebsiteUrl, {});
      return { success: null };
    }

    if (request.method === "DELETE") {
      await deleteWishlist(session, valuesWithWebsiteUrl, {});
      return { success: null };
    }
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }

  throw methodNotAllowed();
};
