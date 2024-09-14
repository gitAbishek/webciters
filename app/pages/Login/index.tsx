import { useLoaderData } from "@remix-run/react";
import { LoginForm } from "./LoginForm";
import { Grid, Root } from "~/pages/Login/styled";
import { Heading, Text } from "~/components/Typography";
import { CheckList } from "~/components/CheckList";
import { LinkButton } from "~/components/Button";
import { ROUTE_REGISTER } from "~/utils/constants";
import { Stack } from "~/components/Stack";
import { LoginPageData } from "~/routes/login";

export function LoginPage() {
  const { next } = useLoaderData<LoginPageData>();

  return (
    <Root>
      <Heading as="h2" mb={8} mt={2}>
        Inloggen
      </Heading>
      <Grid>
        <LoginForm next={next} />
        <Stack direction="column" spacing={4}>
          <Heading as="h3" variant="md" weight="semi-bold">
            Nieuwe klanten
          </Heading>
          <Text variant="sm">
            Het aanmaken van een account heeft vele voordelen:
            <CheckList
              items={[
                "Sneller afrekenen",
                "Adressen beheren",
                "Bestellingen traceren",
              ]}
            />
          </Text>
          <div>
            <LinkButton to={ROUTE_REGISTER}>Maak een account aan</LinkButton>
          </div>
        </Stack>
      </Grid>
    </Root>
  );
}
