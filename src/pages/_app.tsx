import { AppProps } from "next/app";
import Head from "next/head";
import AppStore from "core/AppStore";
import AppProvider from "core/AppProvider";
import { ColorSchemeProvider } from "@mantine/core";
import { useState } from "react";
import nookies, { setCookie } from "nookies";
import RouterTransition from "components/RouterTransition";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // cacheTime: 60 * 60 * 24 * 1, //1 hour
      // refetchOnMount: false,
    },
  },
});

interface WithColorScheme {
  preferredColorScheme: "light" | "dark";
}

const THEME_COOKIE = "theme_mantine";
export default function App(props: AppProps & WithColorScheme) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState(props.preferredColorScheme);

  function toggleColorScheme(value: "light" | "dark") {
    const nextColorScheme =
      value || (colorScheme === "light" ? "dark" : "light");
    setColorScheme(nextColorScheme);
    setCookie(null, THEME_COOKIE, nextColorScheme, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }

  return (
    <>
      <Head>
        <title>Sistema de Emissão de Notas Fiscais</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Uma aplicação simples para gerenciar notas fiscais."
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <AppStore>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <AppProvider Page={<Component {...pageProps} />} />
            <RouterTransition />
          </ColorSchemeProvider>
        </AppStore>
      </QueryClientProvider>
    </>
  );
}
App.getInitialProps = ({ ctx }: { ctx: any }) => {
  const cookies = nookies.get(ctx);

  return {
    preferredColorScheme: cookies[THEME_COOKIE] || "light",
  };
};
