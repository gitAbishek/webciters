import { z } from "zod";
import { contactInfo } from "~/schema/contactInfo";
import { firstItem, result } from "~/schema/helpers";
import { createMutation, createQuery } from "~/api/utils.server";

const getContactInfoResponseSchema = z.array(contactInfo).transform(firstItem);

export const getContactInfo = createQuery({
  path: "/user/contact_info",
  withAuthToken: true,
  responseShape: getContactInfoResponseSchema,
});

const putContactInfoBody = contactInfo.omit({ email: true });

export const putContactInfo = createMutation({
  path: "/user/contact_info/edit",
  withAuthToken: true,
  bodyParser: putContactInfoBody,
  responseParser: result,
  method: "put",
});
