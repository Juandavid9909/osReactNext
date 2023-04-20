import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { name, description } from "package.json";

const GlobalStyle = createGlobalStyle`
  html,
  body {
      margin: 0;
      padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#008080"
  }
};

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return(
    <>
      <Head>
        <title>{ name }</title>
        <meta name="description" content={ description } />
      </Head>

      <GlobalStyle />

      <ThemeProvider theme={ theme }>
        <Component {...pageProps}/>
      </ThemeProvider>
    </>
  );
}
