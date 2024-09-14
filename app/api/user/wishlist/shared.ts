import { z } from "zod";

export const bodyShape = z.object({
  spli_guid: z.string(),
  website_url: z.string(),
});
