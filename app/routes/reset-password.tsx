import { ActionFunction, redirect } from "@remix-run/node";
import { ResetPassword } from "~/pages/ResetPassword";
import { DataFunctionArgs } from "~/utils/types";
import { formInputSchema } from "~/pages/ResetPassword/schema";
import { postResetPassword } from "~/api/user/resetPassword";
import { commitSession, getSession } from "~/utils/session";
import { loginPost } from "~/api/login/post";
import { connectCartWithUser, setToken } from "~/utils/auth";
import { ROUTE_ACCOUNT } from "~/utils/constants";
import { notFound } from "~/utils/responses";

export const loader = async ({ request }: DataFunctionArgs) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) throw notFound();

  return { token };
};

export type ResetPasswordPageData = Awaited<ReturnType<typeof loader>>;

// The route reset-password?token=:uuid is send by email
export default ResetPassword;

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = formInputSchema.parse(formData);

  const result = await postResetPassword(session, formValues, {});

  if (!result.success) {
    return {
      error: result.error,
    };
  }

  const resultLogin = await loginPost(
    session,
    {
      username: result.response.user,
      password: formValues.new_password,
    },
    {}
  );

  if (!resultLogin.success) {
    return {
      error: resultLogin.error,
    };
  }

  setToken(session, resultLogin.response.response.token);

  await connectCartWithUser(session);

  return redirect(ROUTE_ACCOUNT, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};
