/* eslint-disable */
import 'babel-polyfill';
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './routes/App';
import configStore from './configureStore';

export const history = createHistory();
export const store = configStore({}, history);

const renderApp = () => {
  ReactDOM.render(
    <HotLoaderAppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>
    </HotLoaderAppContainer>,
    document.getElementById('root'),
  );
};
renderApp();
if (module.hot) {
  // the module update from this path onwards... */
  module.hot.accept();
}
