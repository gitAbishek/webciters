import { useField } from "remix-validated-form";
import { Stack } from "~/components/Stack";
import { RadioField } from "~/components/Form/RadioFields/RadioField";
import { Text } from "~/components/Typography";

type Item = {
  label: string;
  value: string;
};

export type Props = {
  name: string;
  items: Item[];
};

export function RadioFields({ items, name }: Props) {
  const { error } = useField(name);

  return (
    <div>
      <Stack direction="row" spacing={8}>
        {items.map((radio) => (
          <RadioField
            key={radio.value}
            name={name}
            label={radio.label}
            value={radio.value}
          />
        ))}
      </Stack>
      {/* Since this value could be a z.literal which gives an english zod error the easiest fix is having a hardcoded required error message */}
      {error && (
        <Text variant="xs" color="error">
          Gelieve een keuze te maken
        </Text>
      )}
    </div>
  );
}
