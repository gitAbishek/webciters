import { CategoriesSquareSlider } from "~/pages/CmsPage/groups/CategoriesOverview/CategoriesSquareSlider";
import { CategoriesOverviewGroup } from "~/schema/cmsGroups";
import { CategoriesSmallSlider } from "~/pages/CmsPage/groups/CategoriesOverview/CategoriesSmallSlider";
import { CategoriesBigSlider } from "~/pages/CmsPage/groups/CategoriesOverview/CategoriesBigSlider";

type Props = {
  data: CategoriesOverviewGroup;
};

export function CategoriesOverview({ data }: Props) {
  return (
    <>
      {data.elements.map((element) => {
        if (element.code === "categories-square-slider") {
          return <CategoriesSquareSlider key={element.id} data={element} />;
        }

        if (element.code === "categories-small-slider") {
          return <CategoriesSmallSlider key={element.id} data={element} />;
        }

        if (element.code === "categories-big-slider") {
          return <CategoriesBigSlider key={element.id} data={element} />;
        }

        return undefined;
      })}
    </>
  );
}
