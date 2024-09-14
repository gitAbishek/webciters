import { z } from "zod";

export const filter = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
});

export const priceFilter = z.object({
  priceFrom: z.string().nullable(),
  priceTo: z.string().nullable(),
});

export const category = z.object({
  name: z.string(),
  url: z.string(),
});

export const headerContent = z.object({
  name: z.string(),
  description: z.string().nullable(),
  header_image_url: z.string().nullable(),
  header_image_alt: z.string().nullable(),
});

export type Filter = z.infer<typeof filter>;
export type PriceFilter = z.infer<typeof priceFilter>;
export type Category = z.infer<typeof category>;
export type HeaderContent = z.infer<typeof headerContent>;
