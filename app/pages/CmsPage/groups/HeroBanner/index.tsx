import { HeroBannerGroup } from "~/schema/cmsGroups";
import { HeroBannerContent } from "~/pages/CmsPage/groups/HeroBanner/HeroBannerContent";

type Props = {
  data: HeroBannerGroup;
};

export function HeroBanner({ data }: Props) {
  return (
    <div>
      {data.elements.map((element) => (
        <HeroBannerContent
          size={element.code}
          key={element.id}
          data={element}
        />
      ))}
    </div>
  );
}
