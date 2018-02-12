import { combineReducers } from 'redux';
import PersonFinderReducer from './PersonFinderReducer';
import { routerReducer } from 'react-router-redux'

/**
 * This reducer combines all of the into a single reducer to be used
 * by the store.
 */
export default combineReducers(
  { personFindersState: PersonFinderReducer, router: routerReducer}
);