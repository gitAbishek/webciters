import { ActionFunction, redirect } from "@remix-run/node";
import { LoginPage } from "~/pages/Login";
import { ROUTE_ACCOUNT } from "~/utils/constants";
import { connectCartWithUser, setToken } from "~/utils/auth";
import { loginPost } from "~/api/login/post";
import { formInputSchema } from "~/pages/Login/schema";
import { DataFunctionArgs } from "~/utils/types";
import { commitSession, getSession } from "~/utils/session";
import { isNextRouteAllowed } from "~/utils/redirectBackAfterLogin";

export const loader = async ({ request }: DataFunctionArgs) => {
  const url = new URL(request.url);
  const next = url.searchParams.get("next");

  return { next };
};

export type LoginPageData = Awaited<ReturnType<typeof loader>>;

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const values = formInputSchema.parse(formData);

  const result = await loginPost(session, values, {});

  if (!result.success) {
    return {
      error: result.error,
    };
  }

  setToken(session, result.response.response.token);

  await connectCartWithUser(session);

  const redirectTo =
    values.next && isNextRouteAllowed(values.next)
      ? values.next
      : ROUTE_ACCOUNT;

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default LoginPage;
