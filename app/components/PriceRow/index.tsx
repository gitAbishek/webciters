import { Stack } from "../Stack";
import { AdvicePrice, Price, Root, DiscountTag } from "./styled";
import { formatAsCurrency, formatAsPercentage } from "~/utils/number";

type Props = {
  suggestedPrice: number | null;
  price: number;
};

export function PriceRow({ suggestedPrice, price }: Props) {
  const isSale = !!suggestedPrice;
  const increase = price - (suggestedPrice || price);
  const salePercentage = increase / (suggestedPrice || price);
  return (
    <Root>
      <Stack justify="space-between" flex={100}>
        <Stack>
          {isSale && (
            <AdvicePrice weight="semi-bold">
              {formatAsCurrency(suggestedPrice)}
            </AdvicePrice>
          )}
          <Price weight="semi-bold">{formatAsCurrency(price)}</Price>
        </Stack>
        {isSale && (
          <DiscountTag variant="red">
            {formatAsPercentage(salePercentage)}
          </DiscountTag>
        )}
      </Stack>
    </Root>
  );
}
