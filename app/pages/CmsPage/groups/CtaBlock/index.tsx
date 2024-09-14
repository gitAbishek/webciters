import { CtaBlockGroup } from "~/schema/cmsGroups";
import {
  CustomWrapper,
  Item,
  Root,
} from "~/pages/CmsPage/groups/CtaBlock/styled";
import { Slider } from "~/components/Slider";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { LinkArrowButton } from "~/components/ArrowButton";

type Props = {
  data: CtaBlockGroup;
};

export function CtaBlock({ data }: Props) {
  return (
    <Slider spacing={2}>
      {data.elements.map((banner) => {
        const color =
          banner.code === "cta-block-content-light" ? "white" : "black";

        return (
          <Root key={banner.id}>
            <Item color={color} backgroundImage={banner.media?.image_url}>
              <CustomWrapper color={color}>
                <MarkdownRenderer content={banner.markdown_content} />
              </CustomWrapper>
              {banner.urls && (
                <LinkArrowButton color={color} to={banner.urls.url}>
                  {banner.urls.name}
                </LinkArrowButton>
              )}
            </Item>
          </Root>
        );
      })}
    </Slider>
  );
}
