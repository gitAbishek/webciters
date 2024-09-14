import { useField } from "remix-validated-form";
import { Circle, Input, Label } from "./styled";

type Props = {
  name: string;
  value: string;
  label?: string;
};

/* eslint-disable react/jsx-props-no-spreading */

export function RadioField({ name, value, label }: Props) {
  const { getInputProps, defaultValue } = useField(name);

  return (
    <Label>
      <Input
        type="radio"
        name={name}
        hidden
        value={value}
        defaultChecked={defaultValue === value}
        className="input"
        {...getInputProps}
      />
      <Circle />
      {label}
    </Label>
  );
}
