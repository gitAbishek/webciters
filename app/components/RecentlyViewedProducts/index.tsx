import { Link } from "@remix-run/react";
import { Heading } from "~/components/Typography";
import { Grid, Img } from "./styled";
import { SimplifiedProduct } from "~/schema/product";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import noImageSvg from "~/resources/images/no-image.svg";

type Props = {
  products: SimplifiedProduct[];
};

export function RecentlyViewedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <div>
      <Heading as="h2">Eerder door jou bekeken</Heading>
      <Grid>
        {products.map(
          ({ url, primary_thumbnail_url, primary_thumbnail_alt, guid }) => (
            <Link key={guid} to={url}>
              <Img
                src={primary_thumbnail_url || noImageSvg}
                alt={primary_thumbnail_alt || NO_IMAGE_FOUND}
              />
            </Link>
          )
        )}
      </Grid>
    </div>
  );
}
