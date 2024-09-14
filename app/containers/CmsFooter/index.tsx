import { Fragment } from "react";
import { Stack } from "~/components/Stack";
import { ServiceAndContactBlock } from "~/pages/CmsPage/groups/ServiceAndContactBlock";
import { useCmsFooterData } from "~/containers/CmsFooter/hooks";
import { NewsletterBlock } from "~/pages/CmsPage/groups/NewsletterBlock";
import { Menu } from "~/pages/CmsPage/groups/Menu";
import { LogoLister } from "~/pages/CmsPage/groups/LogoLister";
import { HorizontalMenu } from "~/pages/CmsPage/groups/HorizontalMenu";
import { MarkdownOnlyCentered } from "~/pages/CmsPage/groups/MarkdownOnlyCentered";

/**
 * When ServiceAndContact block is change position it will probably look weird with the dividers
 * The only solution i can think of is to "smartly" render dividers between blocks if they both do not have a background
 * But that seems like a difficult solution for now
 */

export function CmsFooter() {
  const data = useCmsFooterData();

  if (!data) return null;

  return (
    <Stack mb={5} gap={6} direction="column">
      {data.groups.map((group, i) => {
        const isFirstOrLast = i === 0 || i === data.groups.length - 1;

        if (!group) return null;

        if (group.code === "newsletter-block") {
          return (
            <Fragment key={group.id}>
              <NewsletterBlock data={group} />
              {!isFirstOrLast && <hr />}
            </Fragment>
          );
        }

        if (group.code === "service-contact-block") {
          return <ServiceAndContactBlock key={group.id} data={group} />;
        }

        if (group.code === "menu") {
          return (
            <Fragment key={group.id}>
              <Menu data={group} />
              {!isFirstOrLast && <hr />}
            </Fragment>
          );
        }

        if (group.code === "logo-lister") {
          return (
            <Fragment key={group.id}>
              <LogoLister data={group} />
              {!isFirstOrLast && <hr />}
            </Fragment>
          );
        }

        if (group.code === "horizontal-menu") {
          return (
            <Fragment key={group.id}>
              <HorizontalMenu data={group} />
              {!isFirstOrLast && <hr />}
            </Fragment>
          );
        }

        if (group.code === "markdown-only-centered") {
          return (
            <Fragment key={group.id}>
              <MarkdownOnlyCentered key={group.id} data={group} />
              {!isFirstOrLast && <hr />}
            </Fragment>
          );
        }

        return null;
      })}
    </Stack>
  );
}
