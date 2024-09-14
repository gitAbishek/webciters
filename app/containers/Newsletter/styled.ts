import styled from "@emotion/styled";
import { mq } from "~/utils/style";
import { Stack } from "~/components/Stack";
import { getTypedFields } from "~/components/Form";
import { formInputSchema } from "~/containers/Newsletter/schema";
import { SubmitBtn as SubmitBtnBase } from "~/components/Form/SubmitBtn";

const { TextField: TextFieldBase } = getTypedFields(formInputSchema);

export const Root = styled.div`
  padding: var(--space-6) 0;

  ${mq.lg} {
    padding: var(--space-13) 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-column-gap: var(--space-6);

  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StackInputAndButton = styled(Stack)`
  ${mq.lg} {
    flex-direction: row;
    gap: 0;

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const TextField = styled(TextFieldBase)`
  flex: 1;
`;

export const SubmitBtn = styled(SubmitBtnBase)`
  max-height: 5.7rem;
`;
