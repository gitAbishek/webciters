import { z } from "zod";
import {
  TextField as TextFieldBase,
  Props as TextFieldProps,
} from "./TextField";
import { Textarea as TextareaBase, Props as TextareaProps } from "./Textarea";
import {
  RadioFields as RadioFieldsBase,
  Props as RadioFieldsProps,
} from "./RadioFields";
import {
  RadioBoxes as RadioBoxesBase,
  Props as RadioBoxesProps,
} from "./RadioBoxes";
import {
  HiddenField as HiddenFieldBase,
  Props as HiddenFieldProps,
} from "./HiddenField";
import {
  RadioCollapse as RadioCollapseBase,
  Props as RadioCollapseProps,
} from "./RadioCollapse";
import {
  FormError as FormErrorBase,
  Props as FormErrorProps,
} from "./FormError";

import { Checkbox as CheckboxBase, Props as CheckboxProps } from "./Checkbox";

// This will restrict the name prop only to the keys enum provided
// It will have type errors when input name is not same as validation schema
type TypeInputProp<Props, Keys> = (
  props: Props & { name: Keys }
) => JSX.Element | null;

export function getTypedFields<T, U, TKeys = keyof T>(
  _schema: z.Schema<T, U, unknown>
) {
  const TextField: TypeInputProp<TextFieldProps, TKeys> = TextFieldBase;
  const Textarea: TypeInputProp<TextareaProps, TKeys> = TextareaBase;
  const RadioFields: TypeInputProp<RadioFieldsProps, TKeys> = RadioFieldsBase;
  const RadioBoxes: TypeInputProp<RadioBoxesProps, TKeys> = RadioBoxesBase;
  const Checkbox: TypeInputProp<CheckboxProps, TKeys> = CheckboxBase;
  const HiddenField: TypeInputProp<HiddenFieldProps, TKeys> = HiddenFieldBase;
  const RadioCollapse: TypeInputProp<RadioCollapseProps, TKeys> =
    RadioCollapseBase;
  const FormError: TypeInputProp<FormErrorProps, TKeys> = FormErrorBase;

  return {
    TextField,
    RadioFields,
    RadioBoxes,
    Checkbox,
    HiddenField,
    RadioCollapse,
    FormError,
    Textarea,
  };
}
