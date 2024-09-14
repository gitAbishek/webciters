import { useLoaderData } from "@remix-run/react";
import { Heading, Text } from "~/components/Typography";
import { Grid, Container, InlineFav } from "./styled";
import { RecentlyViewedProducts } from "~/components/RecentlyViewedProducts";
import { WishlistPageData } from "~/routes/verlanglijst";
import { GridItem } from "~/pages/Wishlist/GridItem";

export function Wishlist() {
  const { wishlist, recentlyViewedProducts } =
    useLoaderData<WishlistPageData>();

  if (wishlist.length === 0) {
    return (
      <Container>
        <Heading mb={4} as="h2">
          Er staat niks op je verlanglijstje
        </Heading>
        <Text variant="sm">
          Voeg producten toe door op <InlineFav /> te klikken.
        </Text>
      </Container>
    );
  }

  return (
    <Container>
      <Heading as="h2">Favorieten</Heading>
      <Grid>
        {wishlist.map((product) => (
          <GridItem key={product.guid} product={product} />
        ))}
      </Grid>
      {recentlyViewedProducts && (
        <RecentlyViewedProducts products={recentlyViewedProducts} />
      )}
    </Container>
  );
}
