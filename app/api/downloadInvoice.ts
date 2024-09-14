import { createFileMutation } from "~/api/utils.server";

export const getInvoice = createFileMutation({
  path: "/download_invoice/:invoiceId",
});
