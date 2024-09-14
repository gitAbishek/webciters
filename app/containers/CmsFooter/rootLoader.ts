import { Session } from "@remix-run/node";
import { getFooter } from "~/api/cmsMenu/footer";
import { getPaymentFooter } from "~/api/cmsMenu/paymentFooter";

// Check zod error
export async function cmsFooterRootLoader(
  session: Session,
  isPaymentFooter = false
) {
  try {
    if (isPaymentFooter) return await getPaymentFooter(session, {});
    return await getFooter(session, {});
  } catch (e) {
    console.error(e);
    return null;
  }
}
