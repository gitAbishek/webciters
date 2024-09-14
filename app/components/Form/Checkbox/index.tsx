import { useField } from "remix-validated-form";
import { ChangeEvent } from "react";
import { Checkmark, Field, Input } from "./styled";
import { Text } from "~/components/Typography";

export type Props = {
  name: string;
  label: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
};

export function Checkbox({
  name,
  label,
  value,
  onChange,
  checked,
  disabled,
}: Props) {
  const { defaultValue, getInputProps, error } = useField(name);

  return (
    <CheckboxFormLess
      defaultValue={defaultValue}
      error={error}
      {...getInputProps({
        checked,
        disabled,
        value,
        onChange: onChange ? (val) => onChange(val) : undefined,
        label,
      })}
    />
  );
}

type FormlessProps = Props & {
  defaultValue?: boolean;
  error?: string;
};

export function CheckboxFormLess({
  label,
  name,
  onChange,
  value,
  defaultValue,
  error,
  checked,
  disabled,
}: FormlessProps) {
  // React renders the value prop when the value is undefined
  // This breaks the api since checkbox value would result in ""

  const extraInputProps: Record<string, string | number> = {};

  if (value) {
    extraInputProps.value = value;
  }

  return (
    <label>
      <Field>
        <Input
          type="checkbox"
          name={name}
          hidden
          defaultChecked={defaultValue}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...extraInputProps}
        />
        <Checkmark />
        {label}
      </Field>
      {error && (
        <Text variant="xs" color="error">
          {error}
        </Text>
      )}
    </label>
  );
}
