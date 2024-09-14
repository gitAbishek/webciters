import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { useFetcher } from "@remix-run/react";
import { Container } from "~/components/Container";
import { Text } from "~/components/Typography";
import {
  Root,
  Grid,
  StackInputAndButton,
  TextField,
  SubmitBtn,
} from "./styled";
import { Stack } from "~/components/Stack";
import { Link } from "~/components/Link";
import { formInputSchema } from "./schema";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";
import {
  FORM_ID_NEWSLETTER_FOOTER,
  ROUTE_TERMS_AND_CONDITIONS,
} from "~/utils/constants";

const validator = withZod(formInputSchema);

const action = "/data/newsletter";

type Props = {
  children: JSX.Element;
};

export function Newsletter({ children }: Props) {
  const fetcher = useFetcher();
  useFetcherNotifier(fetcher);

  return (
    <ValidatedForm
      fetcher={fetcher}
      validator={validator}
      method="post"
      action={action}
      id={FORM_ID_NEWSLETTER_FOOTER}
    >
      <Root>
        <Container>
          <Grid>
            <div>{children}</div>
            <Stack spacing={1} flex={1} direction="column">
              <StackInputAndButton gap={3} direction="column">
                <TextField label="Je e-mailadres" name="email" />
                <SubmitBtn variant="primary">Inschrijven</SubmitBtn>
              </StackInputAndButton>
              <Text variant="xs">
                <i>
                  We wijzen je ook graag even op ons{" "}
                  <Link to={ROUTE_TERMS_AND_CONDITIONS}>
                    <b>privacybeleid.</b>
                  </Link>
                </i>
              </Text>
            </Stack>
          </Grid>
        </Container>
      </Root>
    </ValidatedForm>
  );
}
