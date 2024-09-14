import { ReactNode } from "react";
import { Stack } from "~/components/Stack";
import { Container } from "~/components/Container";
import { Hide } from "~/components/Hide";
import { TextBlock } from "~/components/TextBlock";
import { ProductSlider } from "~/components/ProductSlider";
import { ProductDetailBlock } from "./ProductDetailBlock";
import {
  ProductSpecifications,
  TableItems,
  TableRowProps,
} from "./ProductSpecifications";
import { CombidealSlider } from "./CombidealSlider";
import { GridBlock, PageContent, SideBar } from "./styled";
import { RecentlyViewedProducts } from "~/components/RecentlyViewedProducts";
import { PdpTemplate } from "~/schema/cms";
import { Property } from "~/schema/property";
import { SimplifiedProduct } from "~/schema/product";
import { ReadMoreContentMarkdown } from "./ReadMoreContentMarkdown";
import { ProductSnippet } from "./ProductSnippet";

type Props = {
  page: PdpTemplate;
  recentlyViewedProducts?: SimplifiedProduct[];
  children: ReactNode;
};

export function ProductDetail({
  page: { product_data: product },
  recentlyViewedProducts,
  children,
}: Props) {
  const tableItems = groupAsTableItems(product.properties);
  return (
    <PageContent>
      <ProductSnippet product={product} />
      <Stack direction="column" spacing={6}>
        <Container>
          <Stack direction="column" spacing={6}>
            <ProductDetailBlock product={product} templateChildren={children} />
            <Hide minWidth="lg">
              <hr />
            </Hide>
            <GridBlock>
              {product.product_information && (
                <>
                  <ReadMoreContentMarkdown
                    title="Productinformatie"
                    content={product.product_information}
                    buttonText="Bekijk volledige productinformatie"
                  />
                  <hr />
                </>
              )}
              <SideBar>
                {tableItems.length > 0 && (
                  // This looks weird but in this way the structure keeps intact
                  <>
                    <ProductSpecifications
                      title="Specificaties"
                      tableItems={tableItems}
                      readMoreButtonText="Bekijk alle specificaties"
                    />
                    <hr />
                  </>
                )}
              </SideBar>
              <TextBlock
                title="Verzendinformatie"
                text={product.delivery_information}
                readMoreButtonText="Bekijk volledige verzendinformatie"
              />
              {product.brand_information && (
                <>
                  <hr />
                  <ReadMoreContentMarkdown
                    title={`Over het merk ${product.brand}`}
                    content={product.brand_information}
                    buttonText={`Lees alles over het merk ${product.brand}`}
                  />
                </>
              )}
            </GridBlock>
            <hr />
          </Stack>
        </Container>
        <Stack direction="column" gap={13}>
          {product.alternative_products.length > 0 && (
            <ProductSlider
              title="Alternatieve producten"
              products={product.alternative_products}
            />
          )}
          {product.combideals.length !== 0 && (
            <CombidealSlider combideals={product.combideals} />
          )}
          <Container>
            {recentlyViewedProducts && (
              <RecentlyViewedProducts products={recentlyViewedProducts} />
            )}
          </Container>
        </Stack>
      </Stack>
    </PageContent>
  );
}

function groupAsTableItems(properties: Property[]): TableItems[] {
  const map = properties.reduce((currMap, property) => {
    if (property.value_text === null) return currMap;
    const newItem = { label: property.name, value: property.value_text };

    if (currMap.has(property.group)) {
      const curr = currMap.get(property.group)!;
      currMap.set(property.group, [...curr, newItem]);
    } else {
      currMap.set(property.group, [newItem]);
    }

    return currMap;
  }, new Map<string, TableRowProps[]>());

  return Array.from(map.entries()).map(([title, items]) => ({
    title,
    items,
  }));
}
