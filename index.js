import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import PersonFinderContainer from './components/containers/PersonFinderContainer';
import HelperContainer from './components/containers/HelperContainer';
import SchedulerContainer from './components/containers/SchedulerContainer';
import AppFrame from './components/presentationals/AppFrame';
import CodeGenContainer from './components/containers/CodeGenContainer';
import LoginContainer from './components/containers/LoginContainer';
import PrivateRouteContainer from './components/containers/PrivateRouteContainer';

import RootReducer from './reducers/RootReducer';

import Typography from 'material-ui/Typography';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


// Create a browser history
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

//initialize store
let store = createStore(RootReducer, applyMiddleware(thunk, logger, historyMiddleware));

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="app">
          <AppFrame>
              <Route exact path="/" component={() => {
                return(
                  <PersonFinderContainer id="personFinder1" />
                );
              }}/>
              <Route path="/test" component={() => {
                return(

                  <SchedulerContainer id="SchedulerContainer" />
                );
              }}/>
              <Route exact path="/Keenan" component={() => {
                return(
                  <PersonFinderContainer store={store} id="personFinder1" />
                  //<Typography type="title" >Keenan Page</Typography>
                );
              }}/>
              <PrivateRouteContainer path="/code-gen" component={() => {
                return(
                  <CodeGenContainer />
                );
              }}/>
              <Route path="/Helper" component={() => {
                return(
                  <HelperContainer />
                );
              }}/>
              <Route path="/login" component={() => {
                return(
                  <LoginContainer />
                );
              }}/>
          </AppFrame>
        </div>
      </ConnectedRouter>
    )
  }
}


ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
