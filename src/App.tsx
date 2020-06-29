import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Shows } from './screens';
import styled from './styled';
import { Theme } from './themes';

const globalStyles = (theme: Theme) => ({
  html: {
    WebkitFontSmoothing: 'antialiased',
    textSizeAdjust: '100%',
  },

  body: {
    margin: 0,
    font: theme.fonts.desktop.medium,
    color: theme.colors.primary,
    backgroundColor: theme.colors.gray5,
  },

  a: {
    textDecoration: 'none',
  },
});

export const AppHeader = styled.header(({ theme }) => ({
  backgroundColor: theme.colors.secondary,
  height: 90,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10000,

  '& > h1': {
    color: theme.colors.tertiary,
    marginLeft: 20,

    a: {
      color: theme.colors.gray5,
    },
  },
}));

interface IApp {
  theme: Theme;
}

const App: React.FC<IApp> = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Router>
        <div className="App">
          <AppHeader className="App-header">
            <h1>
              <Link to="/shows">TV Shows</Link>
            </h1>
          </AppHeader>
          <Switch>
            <Route path="/shows">
              <Shows />
            </Route>
            <Route path="/">
              <Redirect to="/shows" />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
