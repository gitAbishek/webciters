import { Text } from "~/components/Typography";
import { NewsletterStatus } from "~/schema/newsletterStatus";

type Props = {
  newsletterStatus: NewsletterStatus;
};

export function NewsletterStatusDisplay({ newsletterStatus }: Props) {
  if (newsletterStatus.subscription_status) {
    return <Text variant="sm">U bent ingeschreven voor onze nieuwsbrief.</Text>;
  }

  return (
    <Text variant="sm">
      U heeft zich nog niet aangemeld voor onze nieuwsbrief.
    </Text>
  );
}
