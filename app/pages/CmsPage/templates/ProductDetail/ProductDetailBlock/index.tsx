import { ReactNode, useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Tag } from "~/components/Tag";
import { PriceRows } from "./PriceRows";
import { StockDetails } from "./StockDetails";
import { Heading } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { Link } from "~/components/Link";
import { Option, Select } from "~/components/Select";
import {
  FirstHalfWrapper,
  SecondHalfWrapper,
  Row,
  ProductDetailWrapper,
  Img,
  Slider,
  StickyWrapper,
  SliderWrapper,
  WishlistFavorite,
} from "./styled";
import { Hide } from "~/components/Hide";
import { FullProduct, SimplifiedProduct } from "~/schema/product";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import noImage from "~/resources/images/no-image.svg";
import { AddProductToCart } from "./AddProductToCart";
import { ImageViewer } from "~/components/ImageViewer";
import { MarginBottomBody } from "~/components/MarginBottomBody";

export type Image = {
  url: string;
  altText: string;
  isPrimary: boolean;
};

type Props = {
  product: FullProduct;
  templateChildren: ReactNode;
};

export function ProductDetailBlock({ product, templateChildren }: Props) {
  const navigate = useNavigate();
  const [imageViewerImageUrl, setImageViewerImageUrl] = useState<string | null>(
    null
  );

  const variantOptions = product.variants
    .sort(currentItemFirst)
    .map(productAsSelectOption);

  return (
    <ProductDetailWrapper>
      <Row>
        <FirstHalfWrapper>
          <Heading as="h1" variant="xl" mb={3}>
            {product.name}
          </Heading>

          {product.brand && (
            <Heading as="h2" variant="md" mb={3}>
              Merk: <Link to={product.brand_url}>{product.brand}</Link>
            </Heading>
          )}

          {product.labels && (
            <Stack spacing={2}>
              {product.labels.map((tag) => (
                <Tag key={tag.name} variant="red">
                  {tag.name}
                </Tag>
              ))}
            </Stack>
          )}

          <SliderWrapper>
            <WishlistFavorite spliGuid={product.guid} />
            <Slider spacing={5} withIndicators>
              {product.media.map((image) => (
                <Img
                  key={image.media_path_pdp_main}
                  src={image.media_path_pdp_main}
                  alt={image.alt_text}
                  onClick={() => openImageInViewer(image.media_path_pdp_zoom)}
                />
              ))}
            </Slider>
          </SliderWrapper>
        </FirstHalfWrapper>

        <SecondHalfWrapper>
          <Stack spacing={6} direction="column">
            {variantOptions.length > 0 && (
              <Select
                label="Kies je product"
                selectedItem={variantOptions[0]}
                options={variantOptions}
                onSelectedItemChange={({ selectedItem }) => {
                  if (!selectedItem) return;
                  navigate(selectedItem.value);
                }}
              />
            )}

            <PriceRows
              price={product.price}
              suggestedPrice={product.suggested_price}
            />

            <StockDetails
              stockClassification={product.stock_classification}
              deliveryStatement={product.delivery_statement}
              color={product.stock_color}
            />
            <AddProductToCart product={product} />
            <StickyWrapper>
              <MarginBottomBody mb={110} breakpoint="md" />
              <AddProductToCart product={product} />
            </StickyWrapper>

            <hr />
            {templateChildren}
            <Hide maxWidth="md">
              <hr />
            </Hide>
          </Stack>
        </SecondHalfWrapper>
      </Row>
      {imageViewerImageUrl && (
        <ImageViewer
          src={imageViewerImageUrl}
          setIsActiveImageViewer={() => setImageViewerImageUrl(null)}
        />
      )}
    </ProductDetailWrapper>
  );

  function currentItemFirst(a: SimplifiedProduct) {
    if (a.guid === product.guid) {
      return -1;
    }

    return 0;
  }

  function openImageInViewer(imageUrl: string) {
    setImageViewerImageUrl(imageUrl);
  }
}

function productAsSelectOption(product: SimplifiedProduct): Option {
  return {
    name: product.name,
    image: product.primary_thumbnail_url || noImage,
    imageAlt: product.primary_thumbnail_alt || NO_IMAGE_FOUND,
    value: product.url,
  };
}
