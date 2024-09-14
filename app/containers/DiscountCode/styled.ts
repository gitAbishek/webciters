import styled from "@emotion/styled";
import { ValidatedForm } from "remix-validated-form";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { getTypedFields } from "~/components/Form";
import { formInputSchema } from "./schema";

const { TextField } = getTypedFields(formInputSchema);

export const Form = styled(ValidatedForm)`
  margin-top: var(--space-6);
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled(SubmitBtn)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);
  height: 5rem;
`;

export const Field = styled(TextField)`
  flex: 1;

  > .field {
    background: white;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
    height: 5rem;
  }
`;
