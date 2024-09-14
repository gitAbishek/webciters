import { Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { Checkbox } from "~/components/Form/Checkbox";
import { formatAsCurrency } from "~/utils/number";

type Props = {
  name: string;
  label: string;
  price: number;
};

export function ProductService({ name, label, price }: Props) {
  return (
    <Stack spacing={4} justify="space-between">
      <Checkbox name={name} label={label} />
      <Text variant="md" weight="bold">
        {formatAsCurrency(price)}
      </Text>
    </Stack>
  );
}
