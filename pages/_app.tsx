import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import StyledApp from 'components/pages/StyledApp';
import Metadata from 'components/pages/Metadata';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return(
    <>
      <Metadata />

      <StyledApp>
        <Component {...pageProps}/>
      </StyledApp>
    </>
  );
}
