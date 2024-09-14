import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { FormEvent, useEffect, useState } from "react";
import { FixedBanner } from "~/components/FixedBanner";
import { Text } from "~/components/Typography";
import { InputSchema, inputSchema } from "./schema";
import { getTypedFields } from "~/components/Form";
import {
  FormButton,
  FormGrid,
  MainGrid,
} from "~/containers/GoogleTagManagerHeader/CookieConsent/styled";
import { cookieExists, setCookie } from "~/utils/cookies";
import {
  preferenceToString,
  syncConsentWithCookies,
} from "~/containers/GoogleTagManagerHeader/utils";

const validator = withZod(inputSchema);

const { Checkbox } = getTypedFields(inputSchema);

export function CookieConsent() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!cookieExists("consent"));
  }, [setIsActive]);

  if (!isActive) return null;

  return (
    <FixedBanner>
      <MainGrid>
        <Text>
          Om deze site voor jou nog beter te maken, gebruiken wij altijd
          functionele en analytische cookies (en daarmee vergelijkbare
          technieken). Ook willen we cookies plaatsen om je bezoek en onze
          communicatie naar jou makkelijker en persoonlijker te maken.
        </Text>
        <ValidatedForm validator={validator} onSubmit={onSubmit}>
          <FormGrid>
            <Checkbox name="necessary" label="Functioneel" checked disabled />
            <Checkbox name="preferences" label="Voorkeuren" checked />
            <Checkbox name="marketing" label="Marketing" checked />
            <Checkbox name="statistics" label="Statistieken" checked />
            <FormButton type="submit" variant="outline" size="sm">
              Accepteer geselecteerd
            </FormButton>
            <FormButton type="button" size="sm" onClick={handleAcceptAll}>
              Accepteer alles
            </FormButton>
          </FormGrid>
        </ValidatedForm>
      </MainGrid>
    </FixedBanner>
  );

  function onSubmit(data: InputSchema, e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    setCookie("consent", preferenceToString(data));
    syncConsentWithCookies();

    setIsActive(false);
  }

  function handleAcceptAll() {
    onSubmit({
      marketing: true,
      preferences: true,
      statistics: true,
      necessary: true,
    });
  }
}
