import { combineReducers } from 'redux';
import PersonFinderReducer from './PersonFinderReducer';

/**
 * This reducer combines all of the into a single reducer to be used
 * by the store.
 */
export default combineReducers(
  { personFindersState: PersonFinderReducer, }
);