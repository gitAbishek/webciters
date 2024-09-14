import { z } from "zod";
import { formData, numeric } from "~/utils/zodFormHelpers";

export const patchFetchInput = formData({
  new_quantity: numeric(z.number()),
  spli_guid: z.string(),
});

export type PatchFetchInput = z.input<typeof patchFetchInput>;
