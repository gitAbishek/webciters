import { useLoaderData } from "@remix-run/react";
import { CmsPageData } from "~/routes/$";
import { MarkdownOnly } from "~/pages/CmsPage/groups/MarkdownOnly";
import { Stack } from "~/components/Stack";
import { DefaultLanding } from "~/pages/CmsPage/templates/DefaultLanding";
import { ProductDetail } from "~/pages/CmsPage/templates/ProductDetail";
import { Usps } from "~/pages/CmsPage/groups/Usps";
import { HeroBanner } from "~/pages/CmsPage/groups/HeroBanner";
import { CtaBlock } from "~/pages/CmsPage/groups/CtaBlock";
import { CategoriesOverview } from "~/pages/CmsPage/groups/CategoriesOverview";
import { ProductOverview } from "~/pages/CmsPage/templates/ProductOverview";
import { ReviewLister } from "~/pages/CmsPage/groups/ReviewLister";
import { ProductsOverview } from "~/pages/CmsPage/groups/ProductsOverview";
import { MarkdownOnlyCentered } from "~/pages/CmsPage/groups/MarkdownOnlyCentered";
import { CategoriesListerOverview } from "~/pages/CmsPage/groups/CategoriesLister";
import { SingleButton } from "~/pages/CmsPage/groups/SingleButton";

export function CmsPage() {
  const { page, ...rest } = useLoaderData<CmsPageData>();
  const recentlyViewedProducts =
    "recentlyViewedProducts" in rest ? rest.recentlyViewedProducts : undefined;

  if (page.page_template_code === "plp") {
    return <ProductOverview page={page} />;
  }

  if (page.page_template_code === "pdp") {
    return (
      <ProductDetail
        recentlyViewedProducts={recentlyViewedProducts}
        page={page}
      >
        {page.groups.map((group) => {
          if (typeof group === "string") {
            // if group is transformed to a string we have an unrecognized block
            console.warn(group);
            return null;
          }

          if (group.code === "usps") {
            return <Usps key={group.id} data={group} />;
          }

          return null;
        })}
      </ProductDetail>
    );
  }

  if (page.page_template_code === "default_landing") {
    return <DefaultLanding>{renderGroups()}</DefaultLanding>;
  }

  function renderGroups() {
    return (
      <Stack spacing={8} direction="column">
        {page.groups.map((group) => {
          if (typeof group === "string") {
            // if group is transformed to a string we have an unrecognized block
            console.warn(group);
            return null;
          }

          if (group.code === "markdown-only") {
            return <MarkdownOnly key={group.id} data={group} />;
          }

          if (group.code === "markdown-only-centered") {
            return <MarkdownOnlyCentered key={group.id} data={group} />;
          }

          if (group.code === "hero-banner") {
            return <HeroBanner key={group.id} data={group} />;
          }

          if (group.code === "cta-block") {
            return <CtaBlock key={group.id} data={group} />;
          }

          if (group.code === "categories-overview") {
            return <CategoriesOverview key={group.id} data={group} />;
          }

          if (group.code === "categories-lister") {
            return <CategoriesListerOverview key={group.id} data={group} />;
          }

          if (group.code === "products-overview") {
            return <ProductsOverview key={group.id} data={group} />;
          }

          if (group.code === "review-lister") {
            return <ReviewLister key={group.id} data={group} />;
          }

          if (group.code === "single-button-block") {
            return <SingleButton key={group.id} data={group} />;
          }

          return null;
        })}
      </Stack>
    );
  }
}
