import { z } from "zod";
import {
  categoriesListerItemElement,
  categoriesOverviewItemElement,
  ctaBlockContentElement,
  heroBannerContentElement,
  iconMarkdownElement,
  imageTextElement,
  imgListerElement,
  markdownElement,
  productSliderElement,
  reviewRatingElement,
  reviewsElement,
  singleButtonElement,
  singleImageElement,
  urlListerElement,
} from "~/schema/cmsElements";
import { firstItem } from "~/schema/helpers";
import { menuItemListerGroup } from "~/schema/cmsMenu";

export const markdownOnlyGroup = z.object({
  id: z.number(),
  code: z.literal("markdown-only"),
  elements: z.array(markdownElement),
});

export type MarkdownOnlyGroup = z.infer<typeof markdownOnlyGroup>;

export const markdownOnlyGroupCentered = z.object({
  id: z.number(),
  code: z.literal("markdown-only-centered"),
  elements: z.array(markdownElement),
});

export type MarkdownOnlyGroupCentered = z.infer<
  typeof markdownOnlyGroupCentered
>;

export const uspsGroup = z.object({
  id: z.number(),
  code: z.literal("usps"),
  elements: z.array(iconMarkdownElement),
});

export type UspsGroup = z.infer<typeof uspsGroup>;

export const heroBannerGroup = z.object({
  id: z.number(),
  code: z.literal("hero-banner"),
  elements: z.array(heroBannerContentElement),
});

export type HeroBannerGroup = z.infer<typeof heroBannerGroup>;

export const ctaBlockGroup = z.object({
  id: z.number(),
  code: z.literal("cta-block"),
  elements: z.array(ctaBlockContentElement),
});

export type CtaBlockGroup = z.infer<typeof ctaBlockGroup>;

export const categoriesOverviewGroup = z.object({
  id: z.number(),
  code: z.literal("categories-overview"),
  elements: z.array(categoriesOverviewItemElement),
});

export type CategoriesOverviewGroup = z.infer<typeof categoriesOverviewGroup>;

export const categoriesListerGroup = z.object({
  id: z.number(),
  code: z.literal("categories-lister"),
  elements: z.array(categoriesListerItemElement),
});

export type CategoriesListerGroup = z.infer<typeof categoriesListerGroup>;

export const productsOverviewGroup = z.object({
  id: z.number(),
  code: z.literal("products-overview"),
  elements: z.array(productSliderElement),
});

export type ProductsOverviewGroup = z.infer<typeof productsOverviewGroup>;

export const reviewListerGroup = z.object({
  id: z.number(),
  code: z.literal("review-lister"),
  elements: z.array(
    z.discriminatedUnion("code", [reviewsElement, urlListerElement])
  ),
});

export type ReviewListerGroup = z.infer<typeof reviewListerGroup>;

export const newsletterBlockGroup = z.object({
  id: z.number(),
  code: z.literal("newsletter-block"),
  elements: z.array(markdownElement).nonempty().transform(firstItem),
});

export type NewsletterBlockGroup = z.infer<typeof newsletterBlockGroup>;

export const serviceContactBlockGroup = z.object({
  id: z.number(),
  code: z.literal("service-contact-block"),
  elements: z.array(
    z.discriminatedUnion("code", [markdownElement, imageTextElement])
  ),
});

export type ServiceContactBlockGroup = z.infer<typeof serviceContactBlockGroup>;

export const menuGroup = z.object({
  id: z.number(),
  code: z.literal("menu"),
  elements: z.array(
    z.discriminatedUnion("code", [menuItemListerGroup, imgListerElement])
  ),
});

export type MenuGroup = z.infer<typeof menuGroup>;

export const logoListerGroup = z.object({
  id: z.number(),
  code: z.literal("logo-lister"),
  elements: z.array(
    z.discriminatedUnion("code", [singleImageElement, reviewRatingElement])
  ),
});

export type LogoListerGroup = z.infer<typeof logoListerGroup>;

export const horizontalMenuGroup = z.object({
  id: z.number(),
  code: z.literal("horizontal-menu"),
  elements: z.array(menuItemListerGroup),
});

export type HorizontalMenuGroup = z.infer<typeof horizontalMenuGroup>;

export const singleButtonGroup = z.object({
  id: z.number(),
  code: z.literal("single-button-block"),
  elements: z.array(singleButtonElement),
});

export type SingleButtonGroup = z.infer<typeof singleButtonGroup>;
