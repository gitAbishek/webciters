import { useLoaderData } from "@remix-run/react";
import { Heading, Text } from "~/components/Typography";
import { EditableDataBox } from "~/components/EditableDataBox";
import { Grid } from "~/pages/Account/Preferences/styled";
import { AccountPreferencesData } from "~/routes/account/voorkeuren/index";
import { AccountAddressList } from "~/components/AccountAddressList";
import { AccountContactInfoList } from "~/components/AccountContactInfoList";
import {
  ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW,
  ROUTE_ACCOUNT_PREFERENCES_CONTACT_INFO,
  ROUTE_ACCOUNT_PREFERENCES_LOGIN_INFO,
  ROUTE_ACCOUNT_PREFERENCES_NEWSLETTER_STATUS,
} from "~/utils/constants";
import { LinkArrowButton } from "~/components/ArrowButton";
import { NewsletterStatusDisplay } from "~/components/NewsletterStatusDisplay";
import { Stack } from "~/components/Stack";

export function AccountPreferences() {
  const {
    contactInfo,
    defaultDeliveryAddress,
    defaultBillingAddress,
    newsletterStatus,
  } = useLoaderData<AccountPreferencesData>();

  return (
    <>
      <Heading as="h2" mb={6}>
        Gegevens & voorkeuren
      </Heading>
      <Heading as="h3">Persoonlijke gegevens</Heading>
      <Grid>
        <EditableDataBox
          title="Persoonlijke gegevens"
          editLink={{
            to: ROUTE_ACCOUNT_PREFERENCES_CONTACT_INFO,
            label: "Wijzig persoonlijke gegevens",
          }}
        >
          <AccountContactInfoList contactInfo={contactInfo} />
        </EditableDataBox>
        <EditableDataBox
          title="Inloggegevens"
          editLink={{
            to: ROUTE_ACCOUNT_PREFERENCES_LOGIN_INFO,
            label: "Wijzig inloggegevens",
          }}
        >
          <Stack direction="column" gap={2}>
            <Text variant="md" mt={2}>
              {contactInfo.email}
            </Text>
            <Text variant="md">●●●●●●●●●</Text>
          </Stack>
        </EditableDataBox>
      </Grid>
      <Heading as="h3" mt={8}>
        Adressen
      </Heading>
      <Grid>
        {defaultDeliveryAddress && (
          <EditableDataBox title="Standaard Leveringsadres">
            <AccountAddressList address={defaultDeliveryAddress} />
          </EditableDataBox>
        )}
        {defaultBillingAddress && (
          <EditableDataBox title="Standaard factuuradres">
            <AccountAddressList address={defaultBillingAddress} />
          </EditableDataBox>
        )}
      </Grid>
      <LinkArrowButton
        color="primary"
        to={ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW}
      >
        Bekijk adresboek
      </LinkArrowButton>
      <Heading as="h3" mb={4} mt={6}>
        Voorkeuren
      </Heading>
      <EditableDataBox
        title="Nieuwsbrief"
        editLink={{
          to: ROUTE_ACCOUNT_PREFERENCES_NEWSLETTER_STATUS,
          label: "Wijzig voorkeuren",
        }}
      >
        <NewsletterStatusDisplay newsletterStatus={newsletterStatus} />
      </EditableDataBox>
    </>
  );
}
