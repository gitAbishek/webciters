import { ActionFunction } from "@remix-run/node";
import { getSession } from "~/utils/session";
import { formInputSchema } from "./schema";
import { MessageSchema } from "~/utils/responses";
import { postServiceRequest } from "~/api/serviceRequest";
import { cloudflareValidation } from "~/utils/cloudflareValidation";
import { getClientIp } from "~/utils/getClientIp";

export const action: ActionFunction = async ({
  request,
}): Promise<MessageSchema> => {
  const session = await getSession(request);
  const formData = await request.formData();
  const formValues = formInputSchema.parse(formData);
  const newFormValues = {
    ...formValues,
    files: fileTransform(formValues.files),
  };

  // Cloudflare Turnstile validation variables.
  const ip = getClientIp(request);
  const cloudflareToken = formData.get("cf-turnstile-response") || null;

  if (!cloudflareToken)
    return {
      error:
        "Oops! Er is iets mis gegaan bij onze bot-controle. Probeer het later opnieuw.",
    };

  const isValidCloudflare = await cloudflareValidation(ip, cloudflareToken);

  if (!isValidCloudflare)
    return {
      error:
        "Oops! Er is iets mis gegaan bij onze bot-controle. Probeer het later opnieuw.",
    };

  const result = await postServiceRequest(session, newFormValues, {});

  if (!result.success) return result;

  return {
    success:
      "Je serviceverzoek is verzonden, Wij zullen jouw verzoek zo snel mogelijk in behandeling nemen.",
  };
};

function fileTransform(files: string | string[] | undefined): string[] {
  if (typeof files === "string") {
    return [files];
  }

  if (files === undefined) {
    return [];
  }

  return files;
}
