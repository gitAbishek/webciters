import { Slider } from "~/components/Slider";
import { Content, Item, Label, SeeMoreContent } from "./styled";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { CategoriesOverviewItemElement } from "~/schema/cmsElements";
import noImageSvg from "~/resources/images/no-image.svg";
import { Stack } from "~/components/Stack";
import { Container } from "~/components/Container";

type Props = { data: CategoriesOverviewItemElement };

export function CategoriesBigSlider({ data }: Props) {
  return (
    <Container>
      <Stack mb={4}>
        <MarkdownRenderer content={data.markdown_content} />
      </Stack>
      <Slider spacing={2}>
        {data.producttags.map((tag) => (
          <Item key={tag.url + tag.name}>
            <Content backgroundImage={tag.image_url || noImageSvg} to={tag.url}>
              <Label>{tag.name}</Label>
            </Content>
          </Item>
        ))}
        {data.urls && (
          <Item>
            <SeeMoreContent to={data.urls.url}>
              <Label>{data.urls.name}</Label>
            </SeeMoreContent>
          </Item>
        )}
      </Slider>
    </Container>
  );
}
