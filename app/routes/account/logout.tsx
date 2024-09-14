import { LoaderFunction, redirect } from "@remix-run/node";
import { post } from "~/api/logout/post";
import { commitSession, getSession } from "~/utils/session";
import { loginPathWithReferer } from "~/utils/redirectBackAfterLogin";
import { unsetToken } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  await post(session, {}, {});

  unsetToken(session);

  return redirect(loginPathWithReferer(request), {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};
