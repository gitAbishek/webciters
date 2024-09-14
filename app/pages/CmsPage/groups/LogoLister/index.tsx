import { LogoListerGroup } from "~/schema/cmsGroups";
import { SingleImage } from "~/pages/CmsPage/groups/LogoLister/SingleImage";
import { ReviewRating } from "~/pages/CmsPage/groups/LogoLister/ReviewRating";
import { FlexContainer } from "~/pages/CmsPage/groups/LogoLister/styled";

type Props = {
  data: LogoListerGroup;
};

export function LogoLister({ data }: Props) {
  return (
    <FlexContainer>
      {data.elements.map((element) => {
        if (element.code === "single-image") {
          return <SingleImage key={element.id} data={element} />;
        }

        if (element.code === "review-rating") {
          return <ReviewRating key={element.id} data={element} />;
        }

        return null;
      })}
    </FlexContainer>
  );
}
