import { ProductsOverviewGroup } from "~/schema/cmsGroups";
import { Slider } from "~/components/Slider";
import { ProductCard } from "~/pages/CmsPage/groups/ProductsOverview/styled";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { Container } from "~/components/Container";
import { Stack } from "~/components/Stack";

type Props = {
  data: ProductsOverviewGroup;
};

export function ProductsOverview({ data }: Props) {
  return (
    <>
      {data.elements.map((slider) => (
        <Container key={slider.id}>
          <Stack mb={4}>
            <MarkdownRenderer content={slider.markdown_content} />
          </Stack>
          <Slider spacing={2}>
            {slider.products.map((product) => (
              <ProductCard
                key={product.guid}
                product={product}
                withAddToProduct={false}
                withDeliveryRow
              />
            ))}
          </Slider>
        </Container>
      ))}
    </>
  );
}
