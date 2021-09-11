import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {  createStore } from 'redux';
import { rootReducer } from './states/redux/rootReducer';
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const store: any = createStore(rootReducer,composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
