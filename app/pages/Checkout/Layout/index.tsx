import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { matchPath } from "react-router";
import { Container } from "~/components/Container";
import { Stack } from "~/components/Stack";
import { TabsHeader } from "~/pages/Checkout/Layout/TabsHeader";
import { Sidebar } from "~/pages/Checkout/Layout/Sidebar";
import { FullWidth, Grid, Root } from "~/pages/Checkout/Layout/styled";
import { PAGES_INFO } from "~/pages/Checkout/constants";
import { CheckoutLayoutOutletContextData } from "~/routes/bestellen";

const tabs = Object.values(PAGES_INFO);

export function CheckoutLayout() {
  const location = useLocation();
  const context = useLoaderData<CheckoutLayoutOutletContextData>();

  const tabsWithActive = tabs.map((tab) => ({
    ...tab,
    isActive: !!matchPath({ path: tab.route }, location.pathname),
  }));

  return (
    <Container>
      <Root>
        <Stack gap={8} direction="column" mt={8} mb={13}>
          <TabsHeader
            tabs={[
              ...tabsWithActive,
              { label: "Betalen", route: "/betalen", isActive: false },
            ]}
          />
          <Grid>
            <FullWidth>
              <Outlet context={context} />
            </FullWidth>
            <Sidebar />
          </Grid>
        </Stack>
      </Root>
    </Container>
  );
}
