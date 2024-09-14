import { useField } from "remix-validated-form";
import { Text } from "~/components/Typography";
import {
  Field,
  Label,
  Root,
  TextareaStyled,
} from "~/components/Form/Textarea/styled";

export type Props = {
  label: string;
  className?: string;
  name: string;
};

export function Textarea({ label, className, name }: Props) {
  const { error, getInputProps, defaultValue } = useField(name);

  return (
    <Root className={className}>
      <Field className="field">
        <TextareaStyled
          name={name}
          defaultValue={defaultValue}
          placeholder={" "} // Necessary for hack, see styled.ts
          {...getInputProps()}
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
