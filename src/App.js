import React from 'react';

import GlobalStyle from './styles/global';
import AppProvider from './hooks/index';
import Routes from './routes';

const App = () => {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
