import { useLoaderData, useSearchParams } from "@remix-run/react";
import { SearchPage } from "~/routes/zoeken";
import { Grid, Container } from "./styled";
import { Heading } from "~/components/Typography";
import { GridItem } from "~/pages/Search/GridItem";

export function Search() {
  const { products } = useLoaderData<SearchPage>();
  const [search] = useSearchParams();
  const query = search.get("query");

  return (
    <Container>
      {products.length === 0 ? (
        <Heading as="h2">
          Geen resultaten gevonden voor &apos;{query}&apos;
        </Heading>
      ) : (
        <>
          <Heading as="h2">Zoekresultaten voor &apos;{query}&apos;</Heading>
          <Grid>
            {products.map((product) => (
              <GridItem key={product.guid} product={product} />
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
