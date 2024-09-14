import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { groups } from "~/schema/cmsFooterGroups";

const responseShape = z.object({ groups });

export const getPaymentFooter = createQuery({
  path: "/cms_menu/payment_footer",
  responseShape,
  withAuthToken: false,
});
