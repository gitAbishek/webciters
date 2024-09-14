import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { useLoaderData } from "@remix-run/react";
import { Stack } from "~/components/Stack";
import { Heading } from "~/components/Typography";
import { formInputSchema } from "./schema";
import { useActionSubmitNotifier } from "~/containers/SubmitNotifier/hooks";
import { Root } from "./styled";
import { ResetPasswordPageData } from "~/routes/reset-password";
import { ROUTE_ACCOUNT_PREFERENCES } from "~/utils/constants";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { getTypedFields } from "~/components/Form";

const formValidator = withZod(formInputSchema);
const { TextField } = getTypedFields(formInputSchema);

export function ResetPassword() {
  useActionSubmitNotifier(ROUTE_ACCOUNT_PREFERENCES);
  const { token } = useLoaderData<ResetPasswordPageData>();

  return (
    <Root>
      <Heading as="h2" mb={6}>
        Inloggegevens
      </Heading>
      <ValidatedForm validator={formValidator} method="post">
        <Stack spacing={4} direction="column">
          <Heading as="h3">Wachtwoord wijzigen</Heading>
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
          <input type="hidden" name="reset_token" value={token} />
          <div>
            <SubmitBtn size="sm">Opslaan</SubmitBtn>
          </div>
        </Stack>
      </ValidatedForm>
    </Root>
  );
}
