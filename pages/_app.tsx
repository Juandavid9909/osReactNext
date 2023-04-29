import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';

const  App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    {/* @ts-ignore */}
    <SessionProvider>
      <StyledApp>
        <Metadata />

        <Component {...pageProps}/>
      </StyledApp>
    </SessionProvider>
  </>
);


export default App;
