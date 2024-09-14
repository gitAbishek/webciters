import { Heading, Text } from "~/components/Typography";
import { Container } from "~/components/Container";

export function NewsletterUnsubscribe() {
  return (
    <Container>
      <Heading as="h2" mt={6} mb={1}>
        Jammer dat je je hebt uitgeschreven voor onze nieuwsbrief
      </Heading>
      <Text>Jouw voorkeuren zijn aangepast in ons systeem.</Text>
    </Container>
  );
}
