import { Img, Item, Label, SeeMoreContent } from "./styled";
import { Slider } from "~/components/Slider";
import { CategoriesOverviewItemElement } from "~/schema/cmsElements";
import noImageSvg from "~/resources/images/no-image.svg";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { Stack } from "~/components/Stack";
import { Container } from "~/components/Container";

type Props = { data: CategoriesOverviewItemElement };

export function CategoriesSquareSlider({ data }: Props) {
  return (
    <Container>
      <Stack mb={3}>
        <MarkdownRenderer content={data.markdown_content} />
      </Stack>

      <Slider spacing={2}>
        {data.producttags.map((item) => (
          <Item key={item.url + item.name} to={item.url}>
            <Img src={item.image_url || noImageSvg} alt={NO_IMAGE_FOUND} />
            <Label>{item.name}</Label>
          </Item>
        ))}
        {data.urls && (
          <Item to={data.urls.url}>
            <SeeMoreContent>{data.urls.name}</SeeMoreContent>
          </Item>
        )}
      </Slider>
    </Container>
  );
}
