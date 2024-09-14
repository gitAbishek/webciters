import { z } from "zod";
import { label } from "~/schema/label";
import { property } from "~/schema/property";

export const simplifiedProduct = z.object({
  guid: z.string(),
  price: z.number(),
  primary_thumbnail_url: z.string().nullable(),
  primary_thumbnail_alt: z.string().nullable(),
  suggested_price: z.number().nullable(),
  name: z.string(),
  brand: z.string().nullable(),
  stock: z.number(),
  delivery_statement: z.string().nullable(),
  stock_classification: z.string(),
  url: z.string(),
  labels: z.array(label).optional().nullable(),
});

export type SimplifiedProduct = z.infer<typeof simplifiedProduct>;

export const simplifiedProductWithQuantity = simplifiedProduct.and(
  z.object({
    quantity: z.number(),
  })
);

export type SimplifiedProductWithQuantity = z.infer<
  typeof simplifiedProductWithQuantity
>;

export const combideal = z.object({
  guid: z.string(),
  suggested_price: z.number().nullable(),
  price: z.number(),
  delivery_statement: z.string().nullable(),
  products: z.array(simplifiedProduct),
});

// Used at product detail
export const fullProduct = simplifiedProduct.merge(
  z.object({
    media: z.array(
      z.object({
        media_path_large_thumbnail: z.string(),
        media_path_pdp_main: z.string(),
        media_path_pdp_zoom: z.string(),
        alt_text: z.string(),
      })
    ),
    product_information: z.string().nullable(),
    alternative_products: z.array(simplifiedProduct),
    variants: z.array(simplifiedProduct),
    delivery_information: z.string(),
    brand_information: z.string().nullable(),
    labels: z.array(label),
    properties: z.array(property),
    brand_url: z.string(),
    allow_selling: z.boolean(),
    combideals: z.array(combideal),
    average_rating: z.number().nullable(),
    review_count: z.number().nullable(),
    stock_color: z.string(),
  })
);

export type Combideal = z.infer<typeof combideal>;
export type FullProduct = z.infer<typeof fullProduct>;
