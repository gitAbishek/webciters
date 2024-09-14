import { FirstElementNoMargin, FlexContainer, Root } from "./styled";
import { ServiceContactBlockGroup } from "~/schema/cmsGroups";
import { Markdown } from "~/pages/CmsPage/elements/Markdown";
import { ImageText } from "~/pages/CmsPage/groups/ServiceAndContactBlock/ImageText";

type Props = {
  data: ServiceContactBlockGroup;
};

export function ServiceAndContactBlock({ data }: Props) {
  return (
    <Root>
      <FlexContainer>
        {data.elements.map((element) => {
          if (element.code === "markdown") {
            return (
              <FirstElementNoMargin key={element.id}>
                <Markdown data={element} />
              </FirstElementNoMargin>
            );
          }

          if (element.code === "image-text") {
            return <ImageText key={element.id} data={element} />;
          }

          return null;
        })}
      </FlexContainer>
    </Root>
  );
}
