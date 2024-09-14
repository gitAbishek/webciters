import logo from "app/resources/images/logo.svg";
import { Image, LinkArrowButton, Root } from "./styled";
import { Container } from "~/components/Container";
import { ROUTE_CART, ROUTE_HOME } from "~/utils/constants";
import { Stack } from "~/components/Stack";
import { Link } from "~/components/Link";
import { UspFader } from "~/containers/UspFader";

export function PaymentFlowHeader() {
  return (
    <>
      <UspFader />
      <Container>
        <Stack pt={5}>
          <Root>
            <LinkArrowButton to={ROUTE_CART} arrowPointingLeft>
              Winkelmand
            </LinkArrowButton>
            <Link to={ROUTE_HOME}>
              <Image src={logo} alt="Outlet Duiven - logo" />
            </Link>
          </Root>
        </Stack>
      </Container>
    </>
  );
}
