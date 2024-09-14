import { z } from "zod";
import { createMutation, createQuery } from "~/api/utils.server";
import { result } from "~/schema/helpers";
import { serviceTypes } from "~/schema/serviceTypes";

const getServiceTypesResponseSchema = z.array(serviceTypes);

export const getServiceTypes = createQuery({
  path: "/service_types",
  withAuthToken: false,
  responseShape: getServiceTypesResponseSchema,
});

const postBodyParser = z.object({
  email: z.string(),
  service_subject: z.string(),
  service_content: z.string(),
  service_type: z.number(),
  files: z.array(z.string()),
});

export const postServiceRequest = createMutation({
  path: "/service_request_register",
  withAuthToken: false,
  bodyParser: postBodyParser,
  responseParser: result,
  method: "post",
});
