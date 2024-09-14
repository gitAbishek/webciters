import { FullProduct } from "~/schema/product";
import { Root } from "~/pages/CmsPage/templates/ProductDetail/ProductSnippet/styled";

type Props = {
  product: FullProduct;
};

export function ProductSnippet({ product }: Props) {
  const hasReviews = product.review_count && product.review_count !== 0;
  const stockValue =
    product.stock > 0
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock";

  return (
    <Root>
      <div itemScope itemType="https://schema.org/Product">
        <div itemProp="brand" itemType="https://schema.org/Brand" itemScope>
          <meta itemProp="name" content={product.brand || ""} />
        </div>
        <span itemProp="name">{product.name}</span>
        <meta
          itemProp="description"
          content={product.product_information || ""}
        />
        <img
          itemProp="image"
          src={product.primary_thumbnail_url || ""}
          alt={product.primary_thumbnail_alt || ""}
        />
        <div itemProp="offers" itemType="https://schema.org/Offer" itemScope>
          <link itemProp="url" href={product.url} />
          <meta itemProp="availability" content={stockValue} />
          <meta itemProp="priceCurrency" content="EUR" />
          <meta itemProp="price" content={`${product.price}` || "0"} />
        </div>
        {hasReviews && (
          <div
            itemProp="aggregateRating"
            itemType="https://schema.org/AggregateRating"
            itemScope
          >
            <meta itemProp="reviewCount" content={`${product.review_count}`} />
            <meta
              itemProp="ratingValue"
              content={`${product.average_rating}`}
            />
            <meta itemProp="bestRating" content="10" />
            <meta itemProp="worstRating" content="0" />
          </div>
        )}
      </div>
    </Root>
  );
}
