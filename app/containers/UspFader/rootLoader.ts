import { Session } from "@remix-run/node";
import { getUspFader } from "~/api/cmsMenu/uspFader";

export async function uspFaderRootLoader(session: Session) {
  try {
    return await getUspFader(session, {});
  } catch (e) {
    console.error(e);
    return [];
  }
}
