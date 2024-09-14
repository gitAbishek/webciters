import { useLoaderData, useOutletContext } from "@remix-run/react";
import { Stack } from "~/components/Stack";
import { Heading, Text } from "~/components/Typography";
import { EditableDataBox } from "~/components/EditableDataBox";
import {
  ROUTE_CHECKOUT_DETAIL,
  ROUTE_CHECKOUT_PAYMENT,
  ROUTE_CHECKOUT_SHIPPING,
} from "~/utils/constants";
import { CheckoutLayoutOutletContextData } from "~/routes/bestellen";
import { AccountAddressList } from "~/components/AccountAddressList";
import { CheckoutOverviewPageData } from "~/routes/bestellen/overzicht";
import { formatAsCurrency } from "~/utils/number";
import {
  ResponsiveGrid,
  SideBySideOnMd,
} from "~/pages/Checkout/Overview/styled";
import { Button } from "~/components/Button";
import { useStartPayment } from "~/containers/StartPayment/hooks";
import { useValidateCart } from "~/containers/ValidateCart/hooks";
import { LinkArrowButton } from "~/components/ArrowButton";

export function Overview() {
  const { contactInfo } = useLoaderData<CheckoutOverviewPageData>();
  const userCart = useOutletContext<CheckoutLayoutOutletContextData>();

  const { startPayment, isLoading: isStartPaymentCallLoading } =
    useStartPayment();

  const { validate, isLoading: isValidating } = useValidateCart(startPayment);

  return (
    <>
      <Heading as="h2" mb={6} weight="bold">
        Overzicht
      </Heading>
      <Stack mt={5} gap={6} direction="column">
        <EditableDataBox
          editLink={{
            to: ROUTE_CHECKOUT_DETAIL,
            label: "Wijzig gegevens",
          }}
        >
          <ResponsiveGrid>
            <Stack direction="column" flex={1}>
              <Heading as="h3" mb={2} variant="md" weight="semi-bold">
                Contactinformatie
              </Heading>
              <Text variant="sm">
                {contactInfo.first_name} {contactInfo.prefix_surname}{" "}
                {contactInfo.surname}
              </Text>
              <Text variant="sm">{contactInfo.telephone}</Text>
            </Stack>
            <Stack direction="column" flex={1}>
              <Heading as="h3" mb={2} variant="md" weight="semi-bold">
                Afleveradres
              </Heading>
              <AccountAddressList address={userCart.delivery_address!} />
            </Stack>
            <Stack direction="column" flex={1}>
              <Heading as="h3" mb={2} variant="md" weight="semi-bold">
                Factuuradres
              </Heading>
              <AccountAddressList address={userCart.billing_address!} />
            </Stack>
          </ResponsiveGrid>
        </EditableDataBox>
        <SideBySideOnMd>
          <EditableDataBox
            title="Verzending"
            editLink={{
              to: ROUTE_CHECKOUT_SHIPPING,
              label: "Wijzig verzending",
            }}
          >
            <Text variant="sm">
              {userCart.shipping!.description} (
              {userCart.shipping!.price === 0
                ? "Gratis"
                : formatAsCurrency(userCart.shipping!.price)}
              )
            </Text>
            <Text variant="sm">{userCart.shipping!.subtitle}</Text>
          </EditableDataBox>

          <EditableDataBox
            title="Betaalwijze"
            editLink={{
              to: ROUTE_CHECKOUT_PAYMENT,
              label: "Wijzig betaalwijze",
            }}
          >
            <Text variant="sm">{userCart.payment_details?.name}</Text>
          </EditableDataBox>
        </SideBySideOnMd>
        <Stack gap={4} justify="flex-end">
          <LinkArrowButton to={ROUTE_CHECKOUT_PAYMENT} arrowPointingLeft>
            Terug
          </LinkArrowButton>
          <Button
            onClick={validate || isStartPaymentCallLoading}
            isLoading={isValidating}
          >
            Bestellen en betalen
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
