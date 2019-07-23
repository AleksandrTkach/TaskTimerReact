import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Router from 'components/Router';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
  </Provider>
);

export default App;
