import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { name, description } from "package.json";

import StyledApp from 'components/pages/StyledApp';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return(
    <>
      <Head>
        <title>{ name }</title>
        <meta name="description" content={ description } />
      </Head>

      <StyledApp>
        <Component {...pageProps}/>
      </StyledApp>
    </>
  );
}
