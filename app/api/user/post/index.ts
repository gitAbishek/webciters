import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { password } from "~/schema/field";
import { errorOr } from "~/schema/helpers";

export const bodyParser = z.object({
  email: z.string().email(),
  organization_name: z.string().nullable(),
  first_name: z.string(),
  prefix_surname: z.string().nullable(),
  surname: z.string(),
  password,
  subscription_status: z.boolean(),
  country_code_iso: z.literal("NL"),
  website_url: z.string(),
});

export const postUser = createMutation({
  withAuthToken: false,
  method: "post",
  path: "/user/add",
  bodyParser,
  responseParser: errorOr({}),
});
