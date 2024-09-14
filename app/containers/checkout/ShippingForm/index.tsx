import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { useFetcher } from "@remix-run/react";
import { useRef } from "react";
import {
  FORM_ID_CHECKOUT_SHIPPING,
  ROUTE_CHECKOUT_DETAIL,
  ROUTE_DATA_CHECKOUT_SHIPPING_FORM,
} from "~/utils/constants";
import { Heading } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { RadioBoxes } from "~/components/Form/RadioBoxes";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { formInputSchema } from "./schema";
import { ShippingMethod } from "~/schema/shipping";
import { Fetcher } from "~/utils/types";
import { formatAsCurrency } from "~/utils/number";
import { LinkArrowButton } from "~/components/ArrowButton";

type Props = {
  deliveryMethods: ShippingMethod[];
  fetcher: Fetcher;
  currentDeliveryMethod: ShippingMethod | null;
};

const validator = withZod(formInputSchema);

export function ShippingForm({
  deliveryMethods,
  fetcher,
  currentDeliveryMethod,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const onChangeFetcher = useFetcher(); // Submitting for every change is an easy way to keep the sidebar data "immediately" in sync.

  const deliveryMethodsAsOptions = deliveryMethods.map((item) => ({
    label: item.description,
    value: item.id,
    extraLabel: item.price ? formatAsCurrency(item.price) : "Gratis",
    subtitle: item.subtitle,
  }));

  return (
    <ValidatedForm
      formRef={formRef}
      fetcher={fetcher}
      validator={validator}
      method="post"
      action={ROUTE_DATA_CHECKOUT_SHIPPING_FORM}
      id={FORM_ID_CHECKOUT_SHIPPING}
      defaultValues={{
        delivery_option_id: currentDeliveryMethod?.id,
      }}
      onChange={() => onChangeFetcher.submit(formRef.current)}
    >
      <Heading as="h2" mb={6} weight="bold">
        Verzenden
      </Heading>
      <Stack gap={3} direction="column" mb={5}>
        <RadioBoxes
          name="delivery_option_id"
          items={deliveryMethodsAsOptions}
        />
      </Stack>
      <Stack gap={4} justify="flex-end">
        <LinkArrowButton to={ROUTE_CHECKOUT_DETAIL} arrowPointingLeft>
          Terug
        </LinkArrowButton>
        <SubmitBtn>Volgende stap</SubmitBtn>
      </Stack>
    </ValidatedForm>
  );
}
