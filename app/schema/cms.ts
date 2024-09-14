import { z } from "zod";
import {
  categoriesListerGroup,
  categoriesOverviewGroup,
  ctaBlockGroup,
  heroBannerGroup,
  markdownOnlyGroup,
  markdownOnlyGroupCentered,
  newsletterBlockGroup,
  productsOverviewGroup,
  reviewListerGroup,
  singleButtonGroup,
  uspsGroup,
} from "~/schema/cmsGroups";
import { fullProduct, simplifiedProduct } from "~/schema/product";
import { firstItem } from "~/schema/helpers";
import { possibleFilter, subTag } from "~/schema/filters";

// Use anyOtherGroup because it still parses when no matching group has been found
// The whole page won't block if new unknown component is added by backend
// I'm transforming the object in string that contains the error so that typescript type union type inference still works
const anyOtherGroup = z
  .object({
    code: z.unknown(),
  })
  .transform(
    (obj) => `Group with code: ${obj.code} was not found or group did not parse`
  );

const groups = z.array(
  z
    .discriminatedUnion("code", [
      markdownOnlyGroup,
      markdownOnlyGroupCentered,
      uspsGroup,
      heroBannerGroup,
      ctaBlockGroup,
      categoriesOverviewGroup,
      categoriesListerGroup,
      productsOverviewGroup,
      reviewListerGroup,
      newsletterBlockGroup,
      singleButtonGroup,
    ])
    .or(anyOtherGroup)
);

export const basePage = z.object({
  response_type: z.literal("Page load (200)"),
  meta_title: z.string().nullable(),
  meta_description: z.string().nullable(),
  groups,
});

export const pdpTemplate = basePage.merge(
  z.object({
    page_template_code: z.literal("pdp"),
    product_data: z.array(fullProduct).nonempty().transform(firstItem),
  })
);

export const plpTemplate = basePage.merge(
  z.object({
    page_template_code: z.literal("plp"),
    producttag_data: z
      .array(
        z.object({
          name: z.string(),
          description: z.string().nullable(),
          detailed_description: z.string().nullable(),
          header_image_url: z.string().nullable(),
          header_image_alt: z.string().nullable(),
          products: z.array(simplifiedProduct),
          breadcrumbs: z.array(
            z.object({
              name: z.string(),
              url: z.string(),
            })
          ),
          possible_filters: z.array(possibleFilter),
          // sibling_tags: z.array(siblingTag),
          sub_tags: z.array(subTag),
        })
      )
      .nonempty()
      .transform(firstItem),
    groups,
  })
);

export type PdpTemplate = z.infer<typeof pdpTemplate>;
export type PlpTemplate = z.infer<typeof plpTemplate>;

export const defaultLandingTemplate = basePage.merge(
  z.object({
    page_template_code: z.literal("default_landing"),
  })
);

export const page = z.discriminatedUnion("page_template_code", [
  plpTemplate,
  pdpTemplate,
  defaultLandingTemplate,
]);

export type Page = z.infer<typeof page>;

export const redirect = z.object({
  response_type: z.literal("Redirect (301)"),
  redirect_url: z.string(),
});

export type Redirect = z.infer<typeof redirect>;
