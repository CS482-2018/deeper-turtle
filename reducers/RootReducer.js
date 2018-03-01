import { combineReducers } from 'redux';
import PersonFinderReducer from './PersonFinderReducer';
import CodeGenReducer from './CodeGenReducer';
import { routerReducer } from 'react-router-redux';
import AuthReducer from './AuthReducer';
import PersonSchedulerReducer from './PersonSchedulerReducer';

/**
 * This reducer combines all of the into a single reducer to be used
 * by the store.
 */
export default combineReducers(
  {
  	personFindersState: PersonFinderReducer,
    personSchedulerState: PersonSchedulerReducer,
  	router: routerReducer,
  	codeGenState: CodeGenReducer,
  	auth: AuthReducer,
  }
);
