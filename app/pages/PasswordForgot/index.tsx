import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { Root } from "./styled";
import { Heading, Text } from "~/components/Typography";
import { ROUTE_LOGIN, ROUTE_PASSWORD_FORGET } from "~/utils/constants";
import { Stack } from "~/components/Stack";
import { formInputSchema } from "~/pages/PasswordForgot/schema";
import { LinkButton } from "~/components/Button";
import { useActionSubmitNotifier } from "~/containers/SubmitNotifier/hooks";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { getTypedFields } from "~/components/Form";

const validator = withZod(formInputSchema);
const { TextField } = getTypedFields(formInputSchema);

export function PasswordForgot() {
  useActionSubmitNotifier();

  return (
    <Root>
      <ValidatedForm
        validator={validator}
        method="patch"
        action={ROUTE_PASSWORD_FORGET}
      >
        <Stack spacing={4} direction="column">
          <Heading as="h2">Wachtwoord vergeten</Heading>
          <Text>
            Stuur je e-mailadres en je ontvangt binnen enkele minuten een link
            waarmee je een wachtwoord kunt instellen.
          </Text>
          <TextField type="email" label="Je e-mailadres" name="email" />
          <Stack spacing={4}>
            <SubmitBtn>Versturen</SubmitBtn>
            <LinkButton variant="outline" to={ROUTE_LOGIN}>
              Terug
            </LinkButton>
          </Stack>
        </Stack>
      </ValidatedForm>
    </Root>
  );
}
