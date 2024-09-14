import { z } from "zod";

export const contactInfo = z.object({
  first_name: z.string(),
  prefix_surname: z.string().nullable(),
  surname: z.string(),
  telephone: z.string().nullable(),
  email: z.string(),
  gender: z.enum(["Male", "Female"]).nullable(),
});

export type ContactInfo = z.infer<typeof contactInfo>;
