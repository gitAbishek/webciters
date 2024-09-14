import { z } from "zod";
import { createQuery } from "~/api/utils.server";

const responseShape = z
  .object({
    newsletter_status: z.boolean(),
  })
  .transform((obj) => obj.newsletter_status);

export const get = createQuery({
  path: "/user/newsletter_status",
  responseShape,
  withAuthToken: true,
});
