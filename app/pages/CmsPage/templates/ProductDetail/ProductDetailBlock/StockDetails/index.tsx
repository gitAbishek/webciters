import { Stock } from "./styled";
import { Text } from "~/components/Typography";

type Props = {
  stockClassification: string;
  deliveryStatement: string | null;
  color: string;
};

export function StockDetails({
  stockClassification,
  deliveryStatement,
  color,
}: Props) {
  return (
    <div>
      <Stock weight="semi-bold" variant="xs" stockColor={color}>
        {stockClassification}
      </Stock>
      {deliveryStatement && <Text variant="xs">{deliveryStatement}</Text>}
    </div>
  );
}
