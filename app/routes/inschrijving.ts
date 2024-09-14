import { NewsletterSubscribe } from "~/pages/NewsletterSubscribe";
import { DataFunctionArgs } from "~/utils/types";
import { notFound, unprocessableEntity } from "~/utils/responses";
import { patchNewsletterStatusEdit } from "~/api/newsletterStatus/edit";
import { getSession } from "~/utils/session";

export const loader = async ({ request }: DataFunctionArgs) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("token");

  if (!code) throw notFound();

  const session = await getSession(request);

  const result = await patchNewsletterStatusEdit(
    session,
    {
      code,
      subscription_status: true,
      identificationcode: null,
    },
    {}
  );

  if (!result.success) {
    throw unprocessableEntity(result.error);
  }

  return null;
};

export default NewsletterSubscribe;
