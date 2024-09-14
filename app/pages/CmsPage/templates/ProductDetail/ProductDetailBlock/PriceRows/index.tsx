import { AdvicePrice, AdvicePriceWrapper, Price, PriceWrapper } from "./styled";
import { Text } from "~/components/Typography";
import { formatAsCurrency, formatAsPercentage } from "~/utils/number";
import { Tag } from "~/components/Tag";
import { getIsSale, getSalePercentage } from "~/utils/price";

type Props = {
  suggestedPrice: number | null;
  price: number;
};

export function PriceRows({ price, suggestedPrice }: Props) {
  const discountInEuros = (suggestedPrice ?? price) - price;
  const salePercentage = getSalePercentage(price, suggestedPrice);
  const isSale = getIsSale(price, suggestedPrice);

  return (
    <div>
      <PriceWrapper>
        <Price weight="semi-bold" as="span">
          {formatAsCurrency(price ?? suggestedPrice)}
        </Price>
        {isSale && (
          <Tag variant="red">{formatAsPercentage(salePercentage)}</Tag>
        )}
      </PriceWrapper>

      {isSale && suggestedPrice && (
        <>
          <AdvicePriceWrapper>
            <Text as="span" weight="medium" variant="sm" color="gray-60" mb={2}>
              Adviesprijs
            </Text>
            <AdvicePrice as="span" variant="sm" color="gray-60">
              {formatAsCurrency(suggestedPrice)}
            </AdvicePrice>
          </AdvicePriceWrapper>
          <div>
            <Text variant="sm" weight="semi-bold">
              Je bespaart: {formatAsCurrency(discountInEuros)}
            </Text>
          </div>
        </>
      )}
    </div>
  );
}
