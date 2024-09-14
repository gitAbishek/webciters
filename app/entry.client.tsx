import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";
import { ReactNode, useState } from "react";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "~/utils/emotion/utils";
import { ClientStyleContext } from "~/utils/emotion/context";

type ClientCacheProviderProps = {
  children: ReactNode;
};

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
