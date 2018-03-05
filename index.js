import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import RootReducer from './reducers/RootReducer';

import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { PersistGate } from 'redux-persist/lib/integration/react';

import logger from 'redux-logger'
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import AppFrameContainer from './components/containers/AppFrameContainer';
import AppFrame from './components/presentationals/AppFrame';
import Routes from './components/containers/Routes';

import Typography from 'material-ui/Typography';
import {Route} from 'react-router';

// Create a browser history
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

const persistConfig = {
 key: 'root',
 storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, RootReducer)

//initialize store
let store = createStore(persistedReducer, applyMiddleware(thunk, logger, historyMiddleware));

let persistor = persistStore(store);

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ConnectedRouter history={history}>
          <AppFrameContainer >
            <Routes history={history} />
          </AppFrameContainer>
        </ConnectedRouter>
      </div>
    )
  }
}


ReactDOM.render(
  <Provider store = { store }>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
