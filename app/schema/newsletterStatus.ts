import { z } from "zod";

export const newsletterStatus = z.object({
  subscription_status: z.boolean(),
});

export type NewsletterStatus = z.infer<typeof newsletterStatus>;
