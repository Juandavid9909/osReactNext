import { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import themes from "styles/themes.json";

import type { StyledAppProps } from 'types/components/pages/StyledApp';

import { SessionConsumer } from 'contexts/session';

const StyledApp: FC<StyledAppProps> = ({ children }) => (
  <>
    <GlobalStyle />

    <SessionConsumer>
      { ({ theme }) => <ThemeProvider theme={ theme || themes.default }>
        { children }
      </ThemeProvider> }
    </SessionConsumer>
  </>
);

export default StyledApp;
