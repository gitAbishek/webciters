import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { Stack } from "~/components/Stack";
import { LinkButton } from "~/components/Button";
import { formInputSchema } from "./schema";
import { getTypedFields } from "~/components/Form";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { Fetcher } from "~/utils/types";
import {
  GENDER_RADIO_FIELDS,
  ROUTE_DATA_CONTACT_INFO,
} from "~/utils/constants";
import { ContactInfo } from "~/schema/contactInfo";

const formValidator = withZod(formInputSchema);
const { TextField, RadioFields } = getTypedFields(formInputSchema);

type Props = {
  fetcher: Fetcher;
  contactInfo: ContactInfo;
};

export function ContactInfoForm({ fetcher, contactInfo }: Props) {
  return (
    <ValidatedForm
      validator={formValidator}
      method="post"
      fetcher={fetcher}
      action={ROUTE_DATA_CONTACT_INFO}
      defaultValues={contactInfo}
    >
      <Stack spacing={4} direction="column">
        <RadioFields name="gender" items={GENDER_RADIO_FIELDS} />
        <TextField label="Voornaam" name="first_name" />
        <TextField label="Tussenvoegsel" name="prefix_surname" />
        <TextField label="Achternaam" name="surname" />
        <TextField label="Telefoonnummer" name="telephone" />
      </Stack>
      <Stack spacing={4} mt={6}>
        <SubmitBtn size="sm">Opslaan</SubmitBtn>
        <LinkButton to="../" size="sm" variant="outline">
          Annuleren
        </LinkButton>
      </Stack>
    </ValidatedForm>
  );
}
