import { useField } from "remix-validated-form";
import { Input, Circle, Label, HeadWrapper, TextRight } from "./styled";
import { Text } from "~/components/Typography";

type Props = {
  label: string;
  name: string;
  value: string | number;
  extraLabel?: string;
  subtitle?: string;
};

export function RadioBox({ label, name, value, extraLabel, subtitle }: Props) {
  const { getInputProps, defaultValue } = useField(name);

  return (
    <Label>
      <Input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultValue === value}
        className="input"
        {...getInputProps}
      />
      <HeadWrapper className="head-wrapper" gap={3} align="center">
        <Circle className="circle" />
        <div>
          <Text variant="sm" weight="semi-bold">
            {label}
          </Text>
          {subtitle && <Text variant="xs">{subtitle}</Text>}
        </div>
        {extraLabel && <TextRight variant="sm">{extraLabel}</TextRight>}
      </HeadWrapper>
    </Label>
  );
}
