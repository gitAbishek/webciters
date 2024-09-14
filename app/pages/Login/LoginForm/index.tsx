import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { ROUTE_LOGIN, ROUTE_PASSWORD_FORGET } from "~/utils/constants";
import { Heading } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { ActionRow } from "./styled";
import { Link } from "~/components/Link";
import { formInputSchema } from "../schema";
import { useActionSubmitNotifier } from "~/containers/SubmitNotifier/hooks";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { getTypedFields } from "~/components/Form";

const validator = withZod(formInputSchema);
const { TextField } = getTypedFields(formInputSchema);

type Props = {
  next: string | null;
};

export function LoginForm({ next }: Props) {
  useActionSubmitNotifier();

  return (
    <ValidatedForm validator={validator} method="post" action={ROUTE_LOGIN}>
      <Heading as="h3" variant="md" weight="semi-bold" mb={4}>
        Bestaande klanten
      </Heading>
      <fieldset>
        <Stack spacing={4} direction="column">
          <TextField type="email" label="Je e-mailadres" name="username" />
          <TextField type="password" label="Wachtwoord" name="password" />
          <input type="hidden" name="next" value={next || undefined} />
          <ActionRow spacing={6}>
            <SubmitBtn>Inloggen</SubmitBtn>
            <Link isUnderlined to={ROUTE_PASSWORD_FORGET}>
              Wachtwoord vergeten
            </Link>
          </ActionRow>
        </Stack>
      </fieldset>
    </ValidatedForm>
  );
}
