import { z } from "zod";

export const label = z.object({
  name: z.string(),
});
