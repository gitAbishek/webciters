import {
  Root,
  Img,
  Content,
  StretchedLink,
  ActionWrapper,
  BrandText,
  TextEllipses,
} from "./styled";
import { PriceRow } from "~/components/PriceRow";
import { DeliveryRow } from "~/components/DeliveryRow";
import { Stack } from "~/components/Stack";
import { SimplifiedProduct } from "~/schema/product";
import noImage from "~/resources/images/no-image.svg";
import { AddProductToCartButton } from "~/components/AddProductToCartButton";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import { AddProductToCartForm } from "~/containers/Cart/AddProductToCartForm";
import { HiddenField } from "~/components/Form/HiddenField";

type Props = {
  product: SimplifiedProduct;
  action: JSX.Element;
  className?: string;
};

export function ListerProductCard({ product, className, action }: Props) {
  return (
    <Root className={className}>
      <StretchedLink to={product.url} />
      <Content>
        <Img
          src={product.primary_thumbnail_url || noImage}
          alt={product.primary_thumbnail_alt || NO_IMAGE_FOUND}
        />
        <div>
          <ActionWrapper>{action}</ActionWrapper>
          <BrandText variant="sm">{product.brand}</BrandText>
          <TextEllipses variant="md" weight="semi-bold">
            {product.name}
          </TextEllipses>
          <PriceRow
            price={product.price}
            suggestedPrice={product.suggested_price}
          />
          <Stack spacing={4} justify="space-between" align="flex-end">
            <DeliveryRow
              title={product.stock_classification}
              subtitle={product.delivery_statement}
            />
            <AddProductToCartForm product={product} id={product.guid}>
              {(isLoading) => (
                <>
                  <HiddenField name="new_quantity" value="1" />
                  <AddProductToCartButton isLoading={isLoading} />
                </>
              )}
            </AddProductToCartForm>
          </Stack>
        </div>
      </Content>
    </Root>
  );
}
