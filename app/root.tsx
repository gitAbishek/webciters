import type { MetaFunction } from "@remix-run/node";
import { json, LinksFunction, Session } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useMatches,
  useSearchParams,
} from "@remix-run/react";
import { ReactNode, useContext } from "react";

import { withEmotionCache } from "@emotion/react";
import globalCss from "./resources/global.css";
import { fonts } from "~/utils/fonts";
import { Heading, Text } from "~/components/Typography";
import { DataFunctionArgs } from "~/utils/types";
import { initZodTranslations } from "~/utils/initZodTranslations";
import { Toaster } from "~/components/Toaster";
import { useRouteData } from "~/utils/route";
import { useEnhancedEffect } from "~/utils/hooks";
import { ClientStyleContext } from "~/utils/emotion/context";
import { rootLoader as wishlistRootLoader } from "~/containers/WishlistFavorite/rootLoader";
import { rootLoader as cartRootLoader } from "~/containers/Cart/rootLoader";
import { rootLoader as isLoggedInRootLoader } from "~/containers/IsLoggedIn/rootLoader";
import { topNavRootLoader } from "~/containers/TopNav/rootLoader";
import { commitSession, getSession } from "~/utils/session";
import { Container } from "~/components/Container";
import { waitParallel } from "~/utils/promise";
import { MainHeader } from "~/components/MainHeader";
import { paymentMethodsRootLoader } from "~/containers/PaymentMethods/rootLoader";
import { CmsFooter } from "~/containers/CmsFooter";
import { cmsFooterRootLoader } from "~/containers/CmsFooter/rootLoader";
import { CookieConsent } from "~/containers/GoogleTagManagerHeader/CookieConsent";
import { GoogleTagManagerHeader } from "~/containers/GoogleTagManagerHeader";
import { gtmId } from "~/containers/GoogleTagManagerHeader/rootLoader";
import { compareObjects } from "~/utils/object";
import { PaymentFlowHeader } from "~/components/PaymentFlowHeader";
import { ROUTE_CHECKOUT_DETAIL } from "~/utils/constants";
import { Stack } from "~/components/Stack";
import { uspFaderRootLoader } from "~/containers/UspFader/rootLoader";
import { GlobalLoading } from "./components/GlobalLoading";
import { useGtmId } from "./containers/GoogleTagManagerHeader/hooks";

initZodTranslations();

export const meta: MetaFunction = () => ({
  title:
    "Woon en slaap outlet | Top merken met kortingen tot 70% | Outlet Duiven",
  description:
    "Woon en slaap artikelen van 40 topmerken tot 70% goedkoper. Outlet van bekende merken als Riverdale, Rivièra Maison, PTMD en Casa Vivante. De mooiste woonaccessoires, dekbedovertrekken, servies, lampen en meer artikelen voor in je woonkamer, keuken, badkamer of slaapkamer. Bij Outlet Duiven scoor je voordelig jouw nieuwe interieur.",
});
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalCss },
  ...fonts,
  { rel: "icon", href: "/favicon.ico" },
];
type DocumentProps = {
  children: ReactNode;
};

const polyfills = ["es5", "es6", "e7", "scrollIntoView", "es2022"].join("%2C");
export const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const clientStyleData = useContext(ClientStyleContext);
    const [searchParams] = useSearchParams();
    const isPaginationPage = searchParams.get("page");

    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      // eslint-disable-next-line no-param-reassign
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const { tags } = emotionCache.sheet;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-explicit-any
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const gtmId = useGtmId();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
          <GoogleTagManagerHeader />
        </head>
        <body>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          {children}
          {!isPaginationPage && <ScrollRestoration />}

          <script
            src={`https://polyfill.io/v3/polyfill.min.js?features=${polyfills}`}
          />
          <script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            async
            defer
          />
          {/* <Scripts /> */}
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </html>
    );
  }
);

function getData(session: Session) {
  return waitParallel({
    isLoggedIn: isLoggedInRootLoader(session),
    wishlistIds: wishlistRootLoader(session),
    cart: cartRootLoader(session),
    paymentMethods: paymentMethodsRootLoader(session),
    topNav: topNavRootLoader(session),
    uspFader: uspFaderRootLoader(session),
    cmsFooter: cmsFooterRootLoader(session, false),
    cmsPaymentFooter: cmsFooterRootLoader(session, true),
    gtmId: gtmId(),
  });
}

type RootData = Awaited<ReturnType<typeof getData>>;

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  const sessionBeforeData = { ...session.data };

  const loaderData = await getData(session);

  // Since we can only update 1 cookie at a time we need to be careful when to commit the session
  // A page loader can also commit a cookie, try to keep loaderData to not change session if possible

  if (compareObjects(sessionBeforeData, session.data)) {
    return json(loaderData, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return loaderData;
};

const fallbackData = {
  cart: null,
  wishlistIds: [],
  paymentMethods: [],
  isLoggedIn: false,
  topNav: null,
  uspFader: [],
  cmsFooter: null,
  cmsPaymentFooter: null,
  gtmId: null,
};

export function useRootData(): RootData {
  return useRouteData<RootData>("root") || fallbackData;
}

type LayoutProps = {
  children: ReactNode;
};




export function Layout({ children }: LayoutProps) {
  const isPaymentFlow = useMatches()[1].pathname === ROUTE_CHECKOUT_DETAIL;

  return (
    <Document>
      <GlobalLoading />
      {isPaymentFlow ? <PaymentFlowHeader /> : <MainHeader />}
      {children}
      <CmsFooter />

      <Toaster />
      <CookieConsent />
    </Document>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Layout>
      <Container>
        <Heading as="h2" mt={6} mb={1}>
          {caught.status}: {caught.statusText}
        </Heading>
        {caught.status === 404 && (
          <Text>Je bent naar een pagina geleid die niet bestaat.</Text>
        )}
      </Container>
    </Layout>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Layout>
      <Container>
        {process.env.NODE_ENV === "development" ? (
          <>
            {error.toString()}
            <pre>{error.stack}</pre>
          </>
        ) : (
          <Stack justify="center" mt={6}>
            <Heading as="h1">Er is iets mis gegaan</Heading>
          </Stack>
        )}
      </Container>
    </Layout>
  );
}
