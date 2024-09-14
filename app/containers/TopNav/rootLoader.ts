import { Session } from "@remix-run/node";
import { getMainMenu } from "~/api/cmsMenu/mainMenu";

export async function topNavRootLoader(session: Session) {
  try {
    return await getMainMenu(session, {});
  } catch (e) {
    console.error(e);
    return null;
  }
}
