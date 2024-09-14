import { useField } from "remix-validated-form";

export type Props = {
  name: string;
  value?: string;
};

export function HiddenField({ name, value }: Props) {
  const { getInputProps, defaultValue, error } = useField(name);

  if (error) {
    console.error(error);
  }

  return (
    <input
      type="hidden"
      name={name}
      defaultValue={defaultValue}
      value={value}
      {...getInputProps}
    />
  );
}
