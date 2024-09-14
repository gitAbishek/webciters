import { useField } from "remix-validated-form";
import { Stack } from "~/components/Stack";
import { Text } from "~/components/Typography";
import { RadioBox } from "~/components/Form/RadioBoxes/RadioBox";

type Item = {
  label: string;
  value: string | number;
  extraLabel?: string;
  subtitle?: string;
};

export type Props = {
  name: string;
  items: Item[];
};

export function RadioBoxes({ items, name }: Props) {
  const { error } = useField(name);

  return (
    <div>
      <Stack direction="column" spacing={4}>
        {items.map((radio) => (
          <RadioBox
            key={radio.value}
            name={name}
            label={radio.label}
            value={radio.value}
            extraLabel={radio.extraLabel}
            subtitle={radio.subtitle}
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
