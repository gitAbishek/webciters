import {
  useControlField,
  useFormContext,
  ValidatedForm,
} from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { useEffect, useRef } from "react";
import { useFetcher } from "@remix-run/react";
import { Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { Button } from "~/components/Button";
import { formInputSchema, zipcodeFormInputSchema } from "./schema";
import { ROUTE_DATA_ADDRESS_FORM } from "~/utils/constants";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { getTypedFields } from "~/components/Form";
import { AddressFieldsAndCheckActionData } from "./zipcode/server";
import { LoadingIndicator } from "~/components/LoadingIndicator";
import { Address } from "~/schema/address";
import { useUniqueKey } from "~/utils/hooks";
import { Fetcher } from "~/utils/types";

const validator = withZod(formInputSchema);

const { TextField, HiddenField } = getTypedFields(formInputSchema);

type Props = {
  address: Partial<Address>;
  fetcher: Fetcher;
  onCancel: () => void;
};

export function AddressForm({ address, fetcher, onCancel }: Props) {
  const formId = useUniqueKey();

  const formRef = useRef<HTMLFormElement>(null);
  const zipcodeFetcher = useFetcher<AddressFieldsAndCheckActionData>();

  const { clearError } = useFormContext(formId);

  const [street = "", setStreet] = useControlField<string>("street", formId);
  const [city = "", setCity] = useControlField<string>("city", formId);

  useEffect(() => {
    const { data } = zipcodeFetcher;
    if (!data || !data.success) return;

    setStreet(data.street);
    setCity(data.city);
    clearError("street", "city");
  }, [zipcodeFetcher, setStreet, setCity, clearError]);

  const isZipcodeDataLoaded = !!zipcodeFetcher.data;
  const areStreetAndCityDefined = !!street && !!city;
  const isZipcodeFetcherLoading = zipcodeFetcher.state === "submitting";

  return (
    <ValidatedForm
      formRef={formRef}
      id={formId}
      defaultValues={address}
      validator={validator}
      method="post"
      fetcher={fetcher}
      action={ROUTE_DATA_ADDRESS_FORM}
    >
      <Stack className="body" spacing={4} direction="column">
        <HiddenField name="guid" />
        <TextField label="Postcode" name="postal_code" onBlur={handleBlur} />
        <TextField
          label="Huisnummer"
          name="house_number"
          type="number"
          onBlur={handleBlur}
        />
        <TextField
          label="Huisnr toevoeging (niet verplicht)"
          name="house_number_appendix"
          onBlur={handleBlur}
        />
        {renderErrorAndLoading()}
        {isZipcodeDataLoaded || areStreetAndCityDefined ? (
          <>
            <TextField
              label="Straatnaam"
              name="street"
              value={street}
              onChange={setStreet}
            />
            <TextField
              label="Woonplaats"
              name="city"
              value={city}
              onChange={setCity}
            />
          </>
        ) : null}
      </Stack>

      <Stack className="footer" spacing={4} mt={6}>
        <SubmitBtn isLoading={isZipcodeFetcherLoading} size="sm">
          Opslaan
        </SubmitBtn>
        <Button type="button" onClick={onCancel} size="sm" variant="outline">
          Annuleren
        </Button>
      </Stack>
    </ValidatedForm>
  );

  function renderErrorAndLoading() {
    if (isZipcodeFetcherLoading) return <LoadingIndicator />;

    if (zipcodeFetcher.data?.success === false) {
      return (
        <Text variant="sm" color="error">
          {zipcodeFetcher.data.error}
        </Text>
      );
    }
    return null;
  }

  function handleBlur() {
    const result = zipcodeFormInputSchema.safeParse(
      new FormData(formRef.current!)
    );

    if (!result.success) return;

    zipcodeFetcher.submit(formRef.current, {
      action: "/data/address-form/zipcode",
    });
  }
}
