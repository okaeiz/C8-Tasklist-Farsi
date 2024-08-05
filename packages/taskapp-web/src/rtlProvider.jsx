import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// Create RTL cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RtlProvider({ children }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

export default RtlProvider;
