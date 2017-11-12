import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import dashboardApp from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(dashboardApp);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
