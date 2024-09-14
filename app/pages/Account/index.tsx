import { useLoaderData } from "@remix-run/react";
import { Heading, Text } from "~/components/Typography";
import { EditableDataBox } from "~/components/EditableDataBox";
import { Columns, Root } from "./styled";
import { LinkArrowButton } from "~/components/ArrowButton";
import { Stack } from "~/components/Stack";
import { AccountPageData } from "~/routes/account/index";
import {
  ROUTE_ACCOUNT_LOGOUT,
  ROUTE_ACCOUNT_ORDERS,
  ROUTE_ACCOUNT_PREFERENCES,
} from "~/utils/constants";
import { AccountAddressList } from "~/components/AccountAddressList";
import { NewsletterStatusDisplay } from "~/components/NewsletterStatusDisplay";
import { OrderDataBox } from "~/components/OrderDataBox";
import { Order } from "~/schema/order";

export function Account() {
  const { contactInfo, defaultDeliveryAddress, newsletterStatus, orders } =
    useLoaderData<AccountPageData>();

  const firstOrder: Order | null = orders.length > 0 ? orders[0] : null;

  const { first_name, email, prefix_surname, surname, telephone } = contactInfo;

  return (
    <Root>
      <Stack spacing={4} justify="flex-end">
        <LinkArrowButton color="gray-60" to={ROUTE_ACCOUNT_LOGOUT}>
          Uitloggen
        </LinkArrowButton>
      </Stack>
      <Heading as="h2" mb={6}>
        Hallo {first_name},
      </Heading>
      {firstOrder && (
        <Stack direction="column" mb={10} spacing={3}>
          <Heading as="h3">Mijn laatste bestelling</Heading>
          <OrderDataBox
            order={firstOrder}
            goToLink={{
              label: "Bekijk bestellingen",
              to: ROUTE_ACCOUNT_ORDERS,
            }}
          />
        </Stack>
      )}
      <Heading as="h3" mb={3}>
        Gegevens en voorkeuren
      </Heading>
      <Columns>
        <EditableDataBox title="Jouw gegevens">
          <Stack direction="column" gap={2}>
            <Text variant="md" mt={2}>
              {first_name} {prefix_surname} {surname}
            </Text>
            <Text variant="md">{email}</Text>
            {telephone && <Text variant="md">{telephone}</Text>}
          </Stack>
        </EditableDataBox>
        {defaultDeliveryAddress && (
          <EditableDataBox title="Leveringsadres">
            <AccountAddressList address={defaultDeliveryAddress} />
          </EditableDataBox>
        )}

        <EditableDataBox title="Voorkeuren">
          <NewsletterStatusDisplay newsletterStatus={newsletterStatus} />
        </EditableDataBox>
      </Columns>
      <Stack spacing={4} justify="space-between">
        <LinkArrowButton color="primary" to={ROUTE_ACCOUNT_PREFERENCES}>
          Beheer gegevens en voorkeuren
        </LinkArrowButton>
      </Stack>
    </Root>
  );
}
