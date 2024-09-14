import { SeeAllReviewsLink } from "./styled";
import { Container } from "~/components/Container";
import { UrlListerElement } from "~/schema/cmsElements";
import { ChevronRightIcon } from "~/components/Icon";

type Props = {
  data: UrlListerElement;
};

export function UrlLister({ data }: Props) {
  if (!data.urls) return null;

  return (
    <Container>
      <SeeAllReviewsLink to={data.urls.url}>
        <ChevronRightIcon size="sm" />
        {data.urls.name}
      </SeeAllReviewsLink>
    </Container>
  );
}
