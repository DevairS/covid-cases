import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import store from './stores';
import { GlobalStyle } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
