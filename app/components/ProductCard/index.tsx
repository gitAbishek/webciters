import {
  Root,
  LabelTag,
  ImgHolder,
  Img,
  MaxGrow,
  FavButton,
  StretchedLink,
  StackMw,
} from "./styled";
import { Text } from "~/components/Typography";
import { PriceRow } from "~/components/PriceRow";
import { DeliveryRow } from "~/components/DeliveryRow";
import { AddProductToCartButton } from "~/components/AddProductToCartButton";
import { SimplifiedProduct } from "~/schema/product";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import noImageSvg from "~/resources/images/no-image.svg";
import { AddProductToCartForm } from "~/containers/Cart/AddProductToCartForm";
import { HiddenField } from "~/components/Form/HiddenField";

type Props = {
  product: SimplifiedProduct;
  withAddToProduct?: boolean;
  withDeliveryRow?: boolean;
  withRecommendedPopup?: boolean;
  className?: string;
};

export function ProductCard({
  product,
  withAddToProduct,
  withDeliveryRow,
  withRecommendedPopup,
  className,
}: Props) {
  // const increase = product.price - (product.suggested_price || product.price);
  // const salePercentage = increase / (product.suggested_price || product.price);
  // const isSale = increase !== 0;

  return (
    <Root className={className}>
      <StretchedLink to={product.url} />
      <ImgHolder>
        {product.labels &&
          product.labels?.map((label) => (
            <LabelTag key={label.name} variant="grey">
              {label.name}
            </LabelTag>
          ))}

        <FavButton spliGuid={product.guid} />
        <Img
          src={product.primary_thumbnail_url || noImageSvg}
          alt={product.primary_thumbnail_alt || NO_IMAGE_FOUND}
        />
      </ImgHolder>
      <MaxGrow>
        <Text variant="sm">{product.brand}</Text>
        <Text variant="md" weight="semi-bold">
          {product.name}
        </Text>
      </MaxGrow>
      <StackMw direction="column" gap={2} align="flex-start">
        <PriceRow
          price={product.price}
          suggestedPrice={product.suggested_price}
        />
        {withDeliveryRow && product.delivery_statement && (
          <DeliveryRow
            title={product.stock_classification}
            subtitle={product.delivery_statement}
          />
        )}
        {withAddToProduct && (
          <AddProductToCartForm
            product={product}
            id={product.guid}
            withRecommendedPopup={withRecommendedPopup}
          >
            {(isLoading) => (
              <>
                <HiddenField name="new_quantity" value="1" />
                <AddProductToCartButton isLoading={isLoading} />
              </>
            )}
          </AddProductToCartForm>
        )}
      </StackMw>
    </Root>
  );
}
