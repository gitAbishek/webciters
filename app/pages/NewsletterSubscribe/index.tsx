import { Heading, Text } from "~/components/Typography";
import { Container } from "~/components/Container";

export function NewsletterSubscribe() {
  return (
    <Container>
      <Heading as="h2" mt={6} mb={1}>
        Bedankt voor je inschrijving
      </Heading>
      <Text>Jouw voorkeuren zijn aangepast in ons systeem.</Text>
    </Container>
  );
}
