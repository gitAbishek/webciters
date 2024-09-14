import { Fragment } from "react";
import { BackLink, Link, Root } from "./styled";
import { ChevronLeftIcon, ChevronRightIcon } from "~/components/Icon";

export type BreadcrumbItem = {
  url?: string;
  name: string;
};

type Props = {
  breadcrumbs: BreadcrumbItem[];
};

export function Breadcrumb({ breadcrumbs }: Props) {
  const prevRoute = breadcrumbs.at(-2);

  return (
    <Root>
      {prevRoute?.url && (
        <>
          <BackLink to={prevRoute.url} replace>
            <ChevronLeftIcon size="sm" />
            Terug
          </BackLink>
          |
        </>
      )}
      {breadcrumbs.map(({ url, name }, index) => (
        <Fragment key={`${name}${url}`}>
          {index !== 0 && <ChevronRightIcon size="sm" />}
          {url && index !== breadcrumbs.length - 1 ? (
            <Link to={url}>{name}</Link>
          ) : (
            name
          )}
        </Fragment>
      ))}
    </Root>
  );
}
