import { useField } from "remix-validated-form";
import { Text } from "~/components/Typography";

export type Props = {
  name: string;
};

export function FormError({ name }: Props) {
  const { error } = useField(name);

  if (!error) return null;

  return (
    <Text variant="xs" color="error">
      Gelieve een keuze te maken
    </Text>
  );
}
