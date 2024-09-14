import { z } from "zod";
import { firstItem, firstItemOrNull } from "~/schema/helpers";
import { media, review, url } from "~/schema/cmsObjects";
import { simplifiedProduct } from "~/schema/product";

export const markdownElement = z.object({
  id: z.number(),
  code: z.literal("markdown"),
  markdown_content: z.string(),
});

export type MarkdownElement = z.infer<typeof markdownElement>;

export const iconMarkdownElement = markdownElement.merge(
  z.object({
    code: z.literal("icon-markdown"),
    media: z.array(media).transform(firstItemOrNull),
  })
);

export type IconMarkdownElement = z.infer<typeof iconMarkdownElement>;

export const uspFaderGroup = z.object({
  id: z.number(),
  code: z.literal("usp-fader"),
  elements: z.array(iconMarkdownElement),
});

export type UspFaderGroup = z.infer<typeof uspFaderGroup>;

export const heroBannerContentElement = z.object({
  id: z.number(),
  code: z.enum([
    "hero-banner-content-large",
    "hero-banner-content-medium",
    "hero-banner-content-small",
    "hero-banner-content",
  ]),
  markdown_content: z.string().nullable(),
  urls: z.array(url).transform(firstItemOrNull),
  media: z.array(media).transform(firstItemOrNull),
});

export type HeroBannerContentElement = z.infer<typeof heroBannerContentElement>;

export const ctaBlockContentElement = z.object({
  id: z.number(),
  code: z
    .literal("cta-block-content-dark")
    .or(z.literal("cta-block-content-light")),
  markdown_content: z.string(),
  urls: z.array(url).transform(firstItemOrNull),
  media: z.array(media).transform(firstItemOrNull),
});

export const categoriesOverviewItemElement = z.object({
  id: z.number(),
  code: z.enum([
    "categories-square-slider",
    "categories-small-slider",
    "categories-big-slider",
    "categories-medium-lister",
  ]),
  markdown_content: z.string(),
  urls: z.array(url).transform(firstItemOrNull),
  producttags: z.array(
    z.object({
      name: z.string(),
      image_url: z.string().nullable(),
      image_alt: z.string().nullable(),
      url: z.string(),
    })
  ),
});

export type CategoriesOverviewItemElement = z.infer<
  typeof categoriesOverviewItemElement
>;

export const categoriesListerItemElement = z.object({
  id: z.number(),
  code: z.literal("categories-medium-lister"),
  markdown_content: z.string(),
  producttags: z.array(
    z.object({
      name: z.string(),
      image_url: z.string().nullable(),
      image_alt: z.string().nullable(),
      url: z.string(),
    })
  ),
});

export type CategoriesListerItemElement = z.infer<
  typeof categoriesListerItemElement
>;

export const productSliderElement = z.object({
  id: z.number(),
  code: z.literal("product-slider"),
  markdown_content: z.string(),
  products: z.array(simplifiedProduct),
});

export const reviewsElement = z.object({
  id: z.number(),
  code: z.literal("reviews"),
  markdown_content: z.string(),
  average_score: z.number(),
  image_url: z.string(),
  image_alt: z.string(),
  total_count: z.number(),
  urls: z.array(url).nonempty().transform(firstItem),
  reviews: z.array(review),
});

export type ReviewsElement = z.infer<typeof reviewsElement>;

export const urlListerElement = z.object({
  id: z.number(),
  code: z.literal("url-lister"),
  urls: z.array(url).transform(firstItemOrNull),
});

export type UrlListerElement = z.infer<typeof urlListerElement>;

export const imageTextElement = z.object({
  id: z.number(),
  code: z.literal("image-text"),
  markdown_content: z.string(),
  media: z.array(media).transform(firstItemOrNull),
});

export type ImageTextElement = z.infer<typeof imageTextElement>;

export const imgListerElement = z.object({
  id: z.number(),
  code: z.literal("img-lister"),
  markdown_content: z.string(),
  media: z.array(
    z.object({
      image_url: z.string(),
      image_alt: z.string(),
      url: z.string(),
    })
  ),
});

export type ImgListerElement = z.infer<typeof imgListerElement>;

export const singleImageElement = z.object({
  id: z.number(),
  code: z.literal("single-image"),
  media: z.array(media).nonempty().transform(firstItem),
});

export type SingleImageElement = z.infer<typeof singleImageElement>;

export const reviewRatingElement = z.object({
  id: z.number(),
  code: z.literal("review-rating"),
  review_rating: z
    .array(z.object({ average_score: z.number() }))
    .nonempty()
    .transform(firstItem),
});

export type ReviewRatingElement = z.infer<typeof reviewRatingElement>;

export const buttonVariant = z.object({
  key: z.literal("variant"),
  value: z.enum(["primary", "secondary", "outline"]),
});

export const buttonSize = z.object({
  key: z.literal("size"),
  value: z.enum(["sm", "md"]),
});

export const singleButtonElement = z.object({
  id: z.number(),
  code: z.literal("single-button"),
  urls: z
    .array(
      z.object({
        code: z.string(),
        url: z.string(),
        name: z.string(),
      })
    )
    .nonempty()
    .transform(firstItem),
  custom_fields: z.array(
    z.discriminatedUnion("key", [buttonVariant, buttonSize])
  ),
});

export type SingleButtonElement = z.infer<typeof singleButtonElement>;
