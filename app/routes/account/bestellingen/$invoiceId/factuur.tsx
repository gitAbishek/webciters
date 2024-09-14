import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { getInvoice } from "~/api/downloadInvoice";

export const loader = async ({ request, params }: DataFunctionArgs) => {
  const session = await getSession(request);

  const invoiceId = params.invoiceId!;

  const invoice = await getInvoice(session, { invoiceId });

  const blob = await invoice.blob();

  return new Response(blob, {
    headers: { "Content-Disposition": "application; filename=Factuur.pdf" },
  });
};
