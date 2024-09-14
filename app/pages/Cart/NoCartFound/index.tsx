import { CenteredContainer } from "./styled";
import { Heading } from "~/components/Typography";
import { LinkButton } from "~/components/Button";
import { ROUTE_HOME } from "~/utils/constants";

export function NoCartFound() {
  return (
    <CenteredContainer>
      <Heading as="h2" mb={6}>
        Er zit niks in je winkelwagen
      </Heading>
      <LinkButton to={ROUTE_HOME}>Verder winkelen</LinkButton>
    </CenteredContainer>
  );
}
