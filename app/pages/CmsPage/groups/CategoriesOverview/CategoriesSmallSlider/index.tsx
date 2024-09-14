import { Slider } from "~/components/Slider";
import { BrandImg, BrandHolder, Item, SeeMoreContent } from "./styled";
import { CategoriesOverviewItemElement } from "~/schema/cmsElements";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import noImageSvg from "~/resources/images/no-image.svg";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import { Stack } from "~/components/Stack";
import { Container } from "~/components/Container";

export type Brand = {
  imgUrl: string;
  imgAlt: string;
  to: string;
};

type Props = { data: CategoriesOverviewItemElement };

export function CategoriesSmallSlider({ data }: Props) {
  return (
    <Container>
      <Stack mb={4}>
        <MarkdownRenderer content={data.markdown_content} />
      </Stack>
      <Slider spacing={2}>
        {data.producttags.map((tag) => (
          <Item key={tag.url + tag.name}>
            <BrandHolder to={tag.url}>
              <BrandImg
                src={tag.image_url || noImageSvg}
                alt={tag.image_alt || NO_IMAGE_FOUND}
              />
            </BrandHolder>
          </Item>
        ))}
        {data.urls && (
          <Item>
            <SeeMoreContent to={data.urls.url}>{data.urls.name}</SeeMoreContent>
          </Item>
        )}
      </Slider>
    </Container>
  );
}
