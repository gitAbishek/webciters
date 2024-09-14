import { ReviewListerGroup } from "~/schema/cmsGroups";
import { Root } from "./styled";
import { Container } from "~/components/Container";
import { Reviews } from "./Reviews";
import { UrlLister } from "~/pages/CmsPage/groups/ReviewLister/UrlLister";

type Props = {
  data: ReviewListerGroup;
};

export function ReviewLister({ data }: Props) {
  return (
    <Container>
      <Root>
        {data.elements.map((element) => {
          if (element.code === "reviews") {
            return <Reviews key={element.id} data={element} />;
          }

          if (element.code === "url-lister") {
            return <UrlLister key={element.id} data={element} />;
          }

          return null;
        })}
      </Root>
    </Container>
  );
}
