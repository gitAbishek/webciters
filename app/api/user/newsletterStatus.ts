import { z } from "zod";
import { createMutation, createQuery } from "~/api/utils.server";
import { newsletterStatus } from "~/schema/newsletterStatus";
import { errorOr } from "~/schema/helpers";

const getNewsletterStatusShape = z
  .array(newsletterStatus)
  .nonempty()
  .transform((arr) => arr[0]);

export const getNewsletterStatus = createQuery({
  path: "/user/newsletter_status",
  withAuthToken: true,
  responseShape: getNewsletterStatusShape,
});

export const putNewsletterStatus = createMutation({
  path: "/user/newsletter_status/edit",
  method: "put",
  withAuthToken: true,
  bodyParser: newsletterStatus,
  responseParser: errorOr({}),
});
