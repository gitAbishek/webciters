import { NewsletterWrapper } from "./styled";
import { Heading, Text } from "~/components/Typography";
import { Button } from "~/components/Button";
import { Link } from "~/components/Link";
import {
  FORM_ID_NEWSLETTER_FOOTER,
  ROUTE_TERMS_AND_CONDITIONS,
} from "~/utils/constants";

export function NewsletterDiscount() {
  return (
    <NewsletterWrapper>
      <Heading as="h3" mb={3}>
        Korting op je volgende bestelling?
      </Heading>
      <Text variant="sm" mb={4}>
        Schrijf je in voor onze nieuwsbrief om op de hoogte te blijven van
        speciale aanbiedingen, nieuws en ontvang <strong>€5,- korting</strong>
      </Text>
      <Button type="button" variant="secondary" onClick={scrollToNewsletter}>
        Inschrijven op nieuwsbrief
      </Button>
      <Text variant="xs" mt={2}>
        <i>
          We wijzen je ook graag even op ons{" "}
          <Link to={ROUTE_TERMS_AND_CONDITIONS} isUnderlined>
            privacybeleid
          </Link>
          .
        </i>
      </Text>
    </NewsletterWrapper>
  );

  function scrollToNewsletter() {
    const newsletterBlock = document.getElementById(FORM_ID_NEWSLETTER_FOOTER);
    newsletterBlock?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
