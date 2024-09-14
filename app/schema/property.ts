import { z } from "zod";

export const property = z.object({
  group: z.string(),
  name: z.string(),
  value_text: z.string().nullable(),
});

export type Property = z.infer<typeof property>;
