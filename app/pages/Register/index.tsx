import { Link } from "@remix-run/react";
import { ValidatedForm } from "remix-validated-form";
import { CreateBtn, Grid, Root } from "./styled";
import { Heading, Text } from "~/components/Typography";
import { TextField } from "~/components/Form/TextField";
import { Stack } from "~/components/Stack";
import { ROUTE_PRIVACY_POLICY, ROUTE_REGISTER } from "~/utils/constants";
import { Checkbox } from "~/components/Form/Checkbox";
import { formInputValidator } from "~/pages/Register/schema";
import { useActionSubmitNotifier } from "~/containers/SubmitNotifier/hooks";

export function Register() {
  useActionSubmitNotifier();

  return (
    <Root>
      <Heading as="h2" mb={8}>
        Account aanmaken
      </Heading>
      <ValidatedForm
        validator={formInputValidator}
        method="post"
        action={ROUTE_REGISTER}
      >
        <Grid>
          <Stack spacing={4} direction="column">
            <Heading as="h3">Persoonlijke gegevens</Heading>
            <TextField label="Voornaam" name="first_name" />
            <TextField label="Tussenvoegsel" name="prefix_surname" />
            <TextField label="Achternaam" name="surname" />
            <TextField label="Naam Organisatie" name="organization_name" />
          </Stack>
          <Stack spacing={4} direction="column">
            <Heading as="h3">Account gegevens</Heading>
            <TextField type="email" label="Je e-mailadres" name="email" />
            <TextField type="password" label="Wachtwoord" name="password" />
            <TextField
              type="password"
              label="Bevestig wachtwoord"
              name="password_confirm"
            />
            <Checkbox
              name="subscription_status"
              label="Ja, ik schrijf me in op de nieuwsbrief om op de hoogte te blijven van speciale aanbiedingen, nieuws en ontvang €5,- korting"
            />
            <CreateBtn>Maak een account aan</CreateBtn>
            <Text variant="xs">
              Door je te registreren voor een account, ga je akkoord met onze
              gebruiksvoorwaarden. Wij wijzen je ook graag op ons
              <Link to={ROUTE_PRIVACY_POLICY}> privacybeleid</Link>.
            </Text>
          </Stack>
        </Grid>
      </ValidatedForm>
    </Root>
  );
}
