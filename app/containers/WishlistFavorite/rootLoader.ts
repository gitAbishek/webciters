import { Session } from "@remix-run/node";
import { get as getWishlist } from "~/api/user/wishlist/get";

export async function rootLoader(session: Session) {
  try {
    const wishlist = await getWishlist(session, {});
    return wishlist.map(({ guid }) => guid);
  } catch (e) {
    // rootLoader exception can never throw, it would crash all pages
    return [];
  }
}
