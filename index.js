import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import PersonFinderContainer from './components/containers/PersonFinderContainer';
import RootReducer from './reducers/RootReducer';

import PersonFinderAdd from './actions/PersonFinderAdd';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

//initialize store
let store = createStore(RootReducer, applyMiddleware(thunk, logger));
console.log(store.getState());



//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <PersonFinderContainer id="personFinder1" store={store} />
      </div>
    )
  }

  componentWillMount()
  {
      //subscribe to the store for state updates.
      store.subscribe(this.forceUpdate.bind(this));
  }
}


ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
