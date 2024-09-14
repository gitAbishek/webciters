import { UspsGroup } from "~/schema/cmsGroups";
import { IconMarkdown } from "~/pages/CmsPage/elements/IconMarkdown";

type Props = {
  data: UspsGroup;
};

export function Usps({ data }: Props) {
  return (
    <div>
      {data.elements.map((element) => (
        <IconMarkdown key={element.id} data={element} />
      ))}
    </div>
  );
}
