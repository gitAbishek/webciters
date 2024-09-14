import { Outlet } from "@remix-run/react";
import { useMatch } from "react-router";
import { Root, Nav, Content } from "./styled";
import { Heading } from "~/components/Typography";
import { ConditionalLinkArrowBtn } from "~/pages/Account/Preferences/Layout/NavLinkArrowBtn";
import {
  ROUTE_ACCOUNT_PREFERENCES,
  ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW,
  ROUTE_ACCOUNT_PREFERENCES_CONTACT_INFO,
  ROUTE_ACCOUNT_PREFERENCES_LOGIN_INFO,
} from "~/utils/constants";

export function AccountPreferencesLayout() {
  const isOnIndexPage = useMatch(ROUTE_ACCOUNT_PREFERENCES);

  return (
    <Root>
      <Content>
        <Outlet />
      </Content>
      {!isOnIndexPage && (
        <Nav>
          <Heading as="h3" variant="md" weight="semi-bold" mt={2}>
            Andere gegevens wijzigen?
          </Heading>
          <ConditionalLinkArrowBtn
            to={ROUTE_ACCOUNT_PREFERENCES_CONTACT_INFO}
            label="Persoonlijke gegevens"
          />
          <ConditionalLinkArrowBtn
            to={ROUTE_ACCOUNT_PREFERENCES_LOGIN_INFO}
            label="Inloggegevens"
          />
          <ConditionalLinkArrowBtn
            to={ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW}
            label="Adresboek"
          />
        </Nav>
      )}
    </Root>
  );
}
