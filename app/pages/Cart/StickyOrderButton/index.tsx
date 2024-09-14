import { StickyWrapper } from "./styled";
import { Stack } from "~/components/Stack";
import { Heading } from "~/components/Typography";
import { formatAsCurrency } from "~/utils/number";
import { Button } from "~/components/Button";
import { MarginBottomBody } from "~/components/MarginBottomBody";

type Props = {
  totalPrice: number;
  validateCart: () => void;
  validateCartIsLoading: boolean;
};

export function StickyOrderButton({
  totalPrice,
  validateCart,
  validateCartIsLoading,
}: Props) {
  return (
    <StickyWrapper>
      <Stack spacing={4} justify="space-between">
        <Heading as="h3" variant="md" weight="bold">
          Totaal (incl. btw)
        </Heading>
        <Heading as="h3" variant="md" weight="bold">
          {formatAsCurrency(totalPrice)}
        </Heading>
      </Stack>
      <Button onClick={validateCart} isLoading={validateCartIsLoading}>
        Ik ga bestellen
      </Button>
      <MarginBottomBody mb={140} breakpoint="md" />
    </StickyWrapper>
  );
}
