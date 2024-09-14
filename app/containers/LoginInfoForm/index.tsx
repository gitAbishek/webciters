import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { Stack } from "~/components/Stack";
import { Heading } from "~/components/Typography";
import { LinkButton } from "~/components/Button";
import { formInputShape } from "./schema";
import { getTypedFields } from "~/components/Form";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { Fetcher } from "~/utils/types";
import { ROUTE_DATA_LOGIN_INFO } from "~/utils/constants";

const formValidator = withZod(formInputShape);
const { TextField } = getTypedFields(formInputShape);

type Props = {
  fetcher: Fetcher;
};

export function LoginInfoForm({ fetcher }: Props) {
  return (
    <ValidatedForm
      validator={formValidator}
      method="post"
      fetcher={fetcher}
      action={ROUTE_DATA_LOGIN_INFO}
    >
      <Stack spacing={4} direction="column">
        <Heading as="h3">Wachtwoord wijzigen</Heading>
        <TextField
          name="old_password"
          type="password"
          label="Huidige wachtwoord"
        />
        <TextField
          name="new_password"
          type="password"
          label="Nieuw wachtwoord"
        />
        <TextField
          name="new_password_repeated"
          type="password"
          label="Bevestig wachtwoord"
        />
        <Stack spacing={4}>
          <SubmitBtn size="sm">Opslaan</SubmitBtn>
          <LinkButton size="sm" variant="outline" to="../">
            Annuleren
          </LinkButton>
        </Stack>
      </Stack>
    </ValidatedForm>
  );
}
