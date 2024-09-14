import { Heading, Text } from "~/components/Typography";
import { HeadingWrapper, Logo } from "./styled";
import logo from "~/resources/images/logo.svg";
import { Order } from "~/schema/order";
import { ROUTE_SERVICE_KLANTENSERVICE, ROUTE_CONTACT } from "~/utils/constants";
import { Link } from "~/components/Link";

type Props = {
  order: Order;
};

export function CompletedHeading({ order }: Props) {
  return (
    <HeadingWrapper>
      <Logo src={logo} alt="Logo" />
      <Heading as="h1" mb={6}>
        Bedankt voor je order!
      </Heading>
      <Text mb={4} variant="sm">
        Beste {order.customer_info.first_name}, We hebben je order{" "}
        <strong>{order.order_number}</strong> succesvol ontvangen. We gaan aan
        de slag om je pakketje zo snel mogelijk te versturen!
      </Text>
      <Heading as="h3" mb={2}>
        Wat gaan we voor je doen?
      </Heading>
      <Text mb={4} variant="sm">
        We sturen je een bestelbevestiging van je bestelling naar{" "}
        <strong>
          <a href={`mailto: ${order.customer_info.email}`}>
            {order.customer_info.email}
          </a>
        </strong>
        . In je deze en al je andere bestellingen.
      </Text>
      <Heading as="h3" mb={2}>
        Verzendbevestiging
      </Heading>
      <Text mb={4} variant="sm">
        Als je bestelling is ingepakt en meegegeven aan de bezorger, ontvang je
        een e-mail met de track & trace code (pakketje) of het bezorgmoment (XXL
        transport). De e-mail sturen we naar het volgende e-mailadres:{" "}
        <a href={`mailto: ${order.customer_info.email}`}>
          {order.customer_info.email}
        </a>
      </Text>
      <Heading as="h3" mb={2}>
        Bezorgadres
      </Heading>
      <Text mb={8} variant="sm">
        Je bestelling wordt bezorgd op{" "}
        <strong>
          {order.delivery_address?.street}{" "}
          {order.delivery_address?.house_number}{" "}
          {order.delivery_address?.house_number_appendix}{" "}
          {order.delivery_address?.postal_code} {order.delivery_address?.city}
        </strong>
      </Text>
      <Heading as="h2" mb={4}>
        Heb je nog vragen?
      </Heading>
      <Heading as="h3" mb={4}>
        Bestelling aanpassen of annuleren?
      </Heading>
      <Text mb={2} variant="sm">
        Dit kan alleen als je bestelling nog niet is verstuurd. Neem voor
        aanpassingen <Link to={ROUTE_CONTACT}>contact op met ons</Link>.
      </Text>
      <Text mb={8} variant="sm">
        Heb je vragen, we helpen je graag. Onze{" "}
        <Link to={ROUTE_SERVICE_KLANTENSERVICE}>klantenservice</Link> is het
        punt waar we je verder kunnen helpen.
      </Text>
    </HeadingWrapper>
  );
}
