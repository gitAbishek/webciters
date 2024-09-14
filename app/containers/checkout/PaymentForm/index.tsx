import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { Stack } from "~/components/Stack";
import { Heading, Text } from "~/components/Typography";
import { PaymentMethod } from "~/schema/payment";
import { formInputSchema } from "~/containers/checkout/PaymentForm/schema";
import { getTypedFields } from "~/components/Form";
import {
  FORM_ID_CHECKOUT_PAYMENT,
  ROUTE_CHECKOUT_SHIPPING,
  ROUTE_DATA_CHECKOUT_PAYMENT_FORM,
} from "~/utils/constants";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { Fetcher } from "~/utils/types";
import { LinkArrowButton } from "~/components/ArrowButton";

const validator = withZod(formInputSchema);

const { RadioCollapse, FormError } = getTypedFields(formInputSchema);

type Props = {
  paymentMethods: PaymentMethod[];
  fetcher: Fetcher;
  currentPaymentMethod: PaymentMethod | null;
};

export function PaymentForm({
  fetcher,
  paymentMethods,
  currentPaymentMethod,
}: Props) {
  return (
    <ValidatedForm
      id={FORM_ID_CHECKOUT_PAYMENT}
      fetcher={fetcher}
      action={ROUTE_DATA_CHECKOUT_PAYMENT_FORM}
      validator={validator}
      defaultValues={{
        payment_method: currentPaymentMethod?.code,
      }}
      method="post"
    >
      <Heading as="h2" mb={6} weight="bold">
        Betaalwijze
      </Heading>
      <Stack gap={3} direction="column">
        {paymentMethods.map((method) => (
          <RadioCollapse
            key={method.code}
            value={method.code}
            label={method.name}
            name="payment_method"
            image={method.image}
            imageAlt={method.image_alt_text}
          >
            <Text variant="xs" mb={2}>
              U wordt doorgelinkt naar {method.name}, waar u uw bestelling kunt
              afronden.
              <br />
              Pas daarna is uw bestelling succesvol geplaatst.
            </Text>
          </RadioCollapse>
        ))}
        <FormError name="payment_method" />
        <Stack gap={4} justify="flex-end">
          <LinkArrowButton to={ROUTE_CHECKOUT_SHIPPING} arrowPointingLeft>
            Terug
          </LinkArrowButton>
          <SubmitBtn size="sm">Volgende stap</SubmitBtn>
        </Stack>
      </Stack>
    </ValidatedForm>
  );
}
