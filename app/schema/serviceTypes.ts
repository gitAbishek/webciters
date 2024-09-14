import { z } from "zod";

export const serviceTypes = z.object({
  description: z.string(),
  id: z.number(),
});

export type ServiceTypes = z.infer<typeof serviceTypes>;
