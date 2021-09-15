import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {  createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './states/redux/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const store: any = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
