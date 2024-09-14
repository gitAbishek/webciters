import { Session } from "@remix-run/node";
import { getPaymentMethods } from "~/api/paymentMethods";
import { getRequiredEnv } from "~/utils/env";

export async function paymentMethodsRootLoader(session: Session) {
  try {
    return await getPaymentMethods(session, {
      websiteUrl: getRequiredEnv("WEBSITE_URL"),
    });
  } catch (e) {
    // rootLoader exception can never throw, it would crash all pages
    return [];
  }
}
