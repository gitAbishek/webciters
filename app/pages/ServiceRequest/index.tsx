import { useFetcher, useLoaderData } from "@remix-run/react";
import { useRef } from "react";
import { ServiceRequestForm } from "~/containers/ServiceRequestForm";
import { Heading, Text } from "~/components/Typography";
import { Container } from "~/components/Container";
import { ContentWrapper } from "~/pages/ServiceRequest/styled";
import { Stack } from "~/components/Stack";
import { ServiceRequestPageData } from "~/routes/contact";

export function ServiceRequest() {
  const fetcher = useFetcher();
  const formRef = useRef<HTMLFormElement>(null);

  const { serviceTypes } = useLoaderData<ServiceRequestPageData>();

  return (
    <Container>
      <Stack mt={8} gap={6} direction="column" align="center">
        <ContentWrapper>
          <Heading as="h2">E-mail onze klantenservice</Heading>
          <Text>
            Veel vragen hebben we al voor je beantwoord bij onze klantenservice.
            Staat jouw vraag er niet tussen? Neem dan even contact op met de
            klantenservice.
          </Text>
          <ServiceRequestForm
            formRef={formRef}
            serviceTypes={serviceTypes}
            fetcher={fetcher}
          />
        </ContentWrapper>
      </Stack>
    </Container>
  );
}
