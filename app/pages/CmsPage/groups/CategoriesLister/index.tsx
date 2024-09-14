import { CategoriesListerGroup } from "~/schema/cmsGroups";
import { CategoriesMediumLister } from "~/pages/CmsPage/groups/CategoriesLister/CategoriesMediumLister";

type Props = {
  data: CategoriesListerGroup;
};

export function CategoriesListerOverview({ data }: Props) {
  return (
    <>
      {data.elements.map((element) => {
        if (element.code === "categories-medium-lister") {
          return <CategoriesMediumLister key={element.id} data={element} />;
        }

        return undefined;
      })}
    </>
  );
}
