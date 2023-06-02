/**
 * Remix Template
 * Copyright 2023 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import * as React from "react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { RemixBrowser } from "@remix-run/react";

import ClientStyleContext from "./common/ClientStyleContext";
import createEmotionCache from "./common/createEmotionCache";
import theme from "./common/theme";

////////////////////////////////////////////////////////////////////////////////

interface ClientCacheProviderProps
{
    children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps)
{
    const [cache, setCache] = React.useState(createEmotionCache());

    const clientStyleContextValue = React.useMemo(
        () => ({
            reset() {
                setCache(createEmotionCache());
            },
        }),
        []
    );

    return (
        <ClientStyleContext.Provider value={clientStyleContextValue}>
            <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientStyleContext.Provider>
    );
}

startTransition(() => {
    hydrateRoot(
        document,
        <ClientCacheProvider>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <StrictMode>
                    <RemixBrowser />
                </StrictMode>
            </ThemeProvider>
        </ClientCacheProvider>
    );
});
