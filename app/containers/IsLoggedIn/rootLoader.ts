import { Session } from "@remix-run/node";
import { getToken } from "~/utils/auth";

export async function rootLoader(session: Session) {
  const token = await getToken(session);
  return !!token;
}
