import { ActionFunction, redirect } from "@remix-run/node";
import { Register } from "~/pages/Register";
import { postUser } from "~/api/user/post";
import { ROUTE_ACCOUNT } from "~/utils/constants";
import { loginPost } from "~/api/login/post";
import { connectCartWithUser, setToken } from "~/utils/auth";
import { formInputSchema } from "~/pages/Register/schema";
import { commitSession, getSession } from "~/utils/session";
import { getRequiredEnv } from "~/utils/env";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const data = formInputSchema.parse(formData);

  const result = await postUser(
    session,
    {
      ...data,
      website_url: getRequiredEnv("WEBSITE_URL"),
      country_code_iso: "NL",
    },
    {}
  );

  if (!result.success) {
    return {
      error: result.error,
    };
  }

  const resultLogin = await loginPost(
    session,
    {
      username: data.email,
      password: data.password,
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

export default Register;
