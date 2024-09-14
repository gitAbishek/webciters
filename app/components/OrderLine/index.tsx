import { Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { formatAsCurrency } from "~/utils/number";

type Props = {
  name: string;
  value: number;
  bold?: boolean;
  big?: boolean;
};

export function OrderLine({ name, value, bold, big }: Props) {
  const isFree = value === 0;

  return (
    <Stack spacing={4} justify="space-between">
      <Text weight={bold ? "semi-bold" : undefined} variant={big ? "md" : "sm"}>
        {name}
      </Text>
      <Text
        weight="bold"
        variant={big ? "md" : "sm"}
        color={isFree ? "green" : undefined}
      >
        {isFree ? "Gratis" : formatAsCurrency(value)}
      </Text>
    </Stack>
  );
}
