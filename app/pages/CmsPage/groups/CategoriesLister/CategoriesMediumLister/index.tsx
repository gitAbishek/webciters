import { BrandImg, BrandHolder, Item, ContainerWithMb, Root } from "./styled";
import { CategoriesListerItemElement } from "~/schema/cmsElements";
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

type Props = { data: CategoriesListerItemElement };

export function CategoriesMediumLister({ data }: Props) {
  return (
    <Root>
      <ContainerWithMb>
        <MarkdownRenderer content={data.markdown_content} />
      </ContainerWithMb>
      <Container>
        <Stack gap={4} wrap>
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
        </Stack>
      </Container>
    </Root>
  );
}
