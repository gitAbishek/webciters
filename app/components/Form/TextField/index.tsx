import { useField } from "remix-validated-form";
import { Field, Input, Label, Root } from "./styled";
import { Text } from "~/components/Typography";

export type Props = {
  label: string;
  type?: "text" | "email" | "password" | "number";
  className?: string;
  name: string;
  value?: string | number;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  disabled?: boolean;
};

/* eslint-disable react/jsx-props-no-spreading */

export function TextField({
  label,
  type,
  className,
  name,
  onChange,
  onBlur,
  value,
  disabled,
}: Props) {
  const { error, getInputProps, defaultValue } = useField(name);

  return (
    <TextFieldFormless
      defaultValue={defaultValue}
      error={error}
      className={className}
      disabled={disabled}
      {...getInputProps({
        type,
        value,
        error,
        onChange: onChange ? (val) => onChange(val) : undefined,
        onBlur: onBlur ? (val) => onBlur(val) : undefined,
        label,
      })}
    />
  );
}

type FormlessProps = Props & {
  defaultValue?: string;
  error?: string;
};

export function TextFieldFormless({
  label,
  type,
  className,
  name,
  onChange,
  onBlur,
  value,
  defaultValue,
  error,
  disabled,
}: FormlessProps) {
  return (
    <Root className={className}>
      <Field className="field" isDisabled={disabled}>
        <Input
          name={name}
          defaultValue={defaultValue}
          type={type}
          placeholder={" "} // Necessary for hack, see styled.ts
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          onBlur={onBlur ? (e) => onBlur(e.target.value) : undefined}
          isDisabled={disabled}
          disabled={disabled}
        />
        <Label isError={!!error}>{label}</Label>
      </Field>
      {error && (
        <Text variant="xs" color="error">
          {error}
        </Text>
      )}
    </Root>
  );
}
