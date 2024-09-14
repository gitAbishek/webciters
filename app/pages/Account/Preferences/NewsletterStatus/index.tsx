import { useLoaderData } from "@remix-run/react";
import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { Heading } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { ButtonStack } from "./styled";
import { LinkButton } from "~/components/Button";
import { ROUTE_ACCOUNT_PREFERENCES } from "~/utils/constants";
import { useActionSubmitNotifier } from "~/containers/SubmitNotifier/hooks";
import { AccountNewsletterStatusPageData } from "~/routes/account/voorkeuren/nieuwsbrief";
import { formInputSchema } from "./schema";
import { getTypedFields } from "~/components/Form";
import { SubmitBtn } from "~/components/Form/SubmitBtn";

const validator = withZod(formInputSchema);
const { Checkbox } = getTypedFields(formInputSchema);

export function AccountNewsletterStatus() {
  const { newsletterStatus } = useLoaderData<AccountNewsletterStatusPageData>();
  useActionSubmitNotifier("../");

  return (
    <>
      <Heading as="h2" mb={6}>
        Nieuwsbrief inschrijving
      </Heading>
      <ValidatedForm
        defaultValues={newsletterStatus}
        validator={validator}
        method="post"
      >
        <Stack spacing={4} justify="flex-start">
          <Checkbox
            name="subscription_status"
            label="Ik schrijf me in op de nieuwsbrief"
          />
        </Stack>
        <ButtonStack spacing={4}>
          <SubmitBtn size="sm">Opslaan</SubmitBtn>
          <LinkButton
            to={ROUTE_ACCOUNT_PREFERENCES}
            size="sm"
            variant="outline"
          >
            Annuleren
          </LinkButton>
        </ButtonStack>
      </ValidatedForm>
    </>
  );
}
