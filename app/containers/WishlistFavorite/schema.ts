import { z } from "zod";
import { formData } from "~/utils/zodFormHelpers";

export const wishlistFormInput = formData({
  spli_guid: z.string(),
});

export type WishlistFormInput = z.input<typeof wishlistFormInput>;
