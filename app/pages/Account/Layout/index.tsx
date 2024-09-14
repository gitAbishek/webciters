import { Outlet, useMatches } from "@remix-run/react";
import { Container } from "~/components/Container";
import { Columns, Sidebar, NavItem, Main } from "./styled";
import {
  ROUTE_ACCOUNT,
  ROUTE_ACCOUNT_LOGOUT,
  ROUTE_ACCOUNT_ORDER_DETAIL,
  ROUTE_ACCOUNT_ORDERS,
  ROUTE_ACCOUNT_PREFERENCES,
  ROUTE_ACCOUNT_PREFERENCES_ADDRESS_DETAIL,
  ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW,
  ROUTE_ACCOUNT_PREFERENCES_CONTACT_INFO,
  ROUTE_ACCOUNT_PREFERENCES_LOGIN_INFO,
} from "~/utils/constants";
import { Breadcrumb, BreadcrumbItem } from "~/components/Breadcrumb";

export default function AccountLayout() {
  const matches = useMatches();

  return (
    <Container>
      <Breadcrumb breadcrumbs={getBreadcrumbs(matches)} />
      <Columns>
        <Sidebar>
          <NavItem end to={ROUTE_ACCOUNT}>
            Accountoverzicht
          </NavItem>
          <NavItem to={ROUTE_ACCOUNT_ORDERS}>Bestellingen</NavItem>
          <NavItem to={ROUTE_ACCOUNT_PREFERENCES}>
            Gegevens & Voorkeuren
          </NavItem>
          <NavItem to={ROUTE_ACCOUNT_LOGOUT}>Uitloggen</NavItem>
        </Sidebar>
        <Main>
          <Outlet />
        </Main>
      </Columns>
    </Container>
  );
}

const breadcrumbs: BreadcrumbItem[] = [
  { url: ROUTE_ACCOUNT, name: "Account" },
  { url: ROUTE_ACCOUNT_PREFERENCES, name: "Gegevens & voorkeuren" },
  { url: ROUTE_ACCOUNT_PREFERENCES_CONTACT_INFO, name: "Contactinformatie" },
  { url: ROUTE_ACCOUNT_PREFERENCES_LOGIN_INFO, name: "Inloggegevens" },
  { url: ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW, name: "Adresboek" },
  { url: ROUTE_ACCOUNT_PREFERENCES_ADDRESS_DETAIL, name: "Adres details" },
  { url: ROUTE_ACCOUNT_ORDERS, name: "Bestellingen" },
  { url: ROUTE_ACCOUNT_ORDER_DETAIL, name: "Bestelling details" },
];

function getBreadcrumbs(matches: ReturnType<typeof useMatches>) {
  const lastMatchId = matches.at(-1)!.id.replace(":", "$");

  return breadcrumbs.reduce<BreadcrumbItem[]>((prev, { url, name }) => {
    if (url && !lastMatchId.includes(url)) {
      return prev;
    }

    // Current method does not support dynamic urls (eg. /:id), so lets make them never clickable
    if (url?.includes(":")) {
      return [
        ...prev,
        {
          name,
        },
      ];
    }

    return [...prev, { url, name }];
  }, []);
}
