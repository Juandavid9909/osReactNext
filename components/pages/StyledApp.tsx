import { SessionConsumer } from 'contexts/session';
import type { FC } from 'react';
import type { StyledAppProps } from 'types/components/pages/StyledApp';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

const StyledApp: FC<StyledAppProps> = ({ children, currentTheme }) => (
  <>
    <GlobalStyle />

    <SessionConsumer>
      { ({ theme = currentTheme }) => <ThemeProvider theme={ theme }>
        { children }
      </ThemeProvider> }
    </SessionConsumer>
  </>
);

export default StyledApp;
