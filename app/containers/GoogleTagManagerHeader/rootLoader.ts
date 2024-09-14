import { getRequiredEnv } from "~/utils/env";

export async function gtmId() {
  try {
    return getRequiredEnv("GTM_ID");
  } catch (e) {
    console.error(e);
    return null;
  }
}
