import { Heading, Text } from "~/components/Typography";
import { StockText } from "./styled";
import { Stack } from "~/components/Stack";
import { Link } from "~/components/Link";

type Props = {
  brand: string | null;
  productTitle: string;
  stockClassification: string;
  url: string;
};

export function ProductHeading({
  brand,
  productTitle,
  stockClassification,
  url,
}: Props) {
  return (
    <Stack spacing={6} justify="space-between">
      <div>
        {brand && <Text variant="sm">{brand}</Text>}
        <Link to={url}>
          <Heading as="h3" variant="md" weight="bold" mt={1}>
            {productTitle}
          </Heading>
        </Link>
        <StockText variant="xs" mt={2} weight="semi-bold">
          {stockClassification}
        </StockText>
      </div>
    </Stack>
  );
}
