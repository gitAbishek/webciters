import { z } from "zod";

export const url = z.object({
  code: z.string(),
  url: z.string(),
  name: z.string(),
});

export const media = z.object({
  image_url: z.string(),
  image_alt: z.string(),
});

export const review = z.object({
  id: z.string(),
  date: z.string(),
  description_long: z.string(),
  description_short: z.string(),
  rating_total: z.number(),
  rating_rapidity: z.number().nullable(),
  rating_price: z.number().nullable(),
  rating_communication: z.number().nullable(),
});

export type Review = z.infer<typeof review>;
