import $ from 'jquery';
import {push} from 'react-router-redux';
/**
 * This class contains all of the actions related to authentication
 * of the KLF staff/volunteer user.
 *
 * To import an action, use the following syntax:
 *		import {ActionName} from './path/to/AuthActions'
 */


/**
 * Attempts to log in the user with the given credentials.
 * If the attempt is successful, then the user is redirected from their current
 * page.  If the attempt is unsuccessful, the bad login attempt is marked in
 * the auth store.
 * 
 * Parameters:
 *		string username: 		The username to use for authentication.
 *		string password: 		The password to use for authentication.
 *		string redirectPath: 	The path to redirect the user to if authentication
 *								is successful. If undefined, redirectPath is set
 *								to '/'.
 */
export function Login(username, password, redirectPath)
{
	if(redirectPath === undefined)
		redirectPath = '/';
	console.log(redirectPath);
	return (dispatch) => {
		var options = {
		  	method: "POST",
		  	url: "login",
		  	data: JSON.stringify({username: username, password: password}),
		  	contentType: "application/json",
		}
		$.ajax(options).then((data, status, j) => {
			dispatch(SetAuthToken(data.token, true))
			dispatch(push(redirectPath));
		},
		(jxhr, status, err) => {
			dispatch(BadLogin());
		})

	}
}

/**
 * Sets the authentication token to null and marks the user as unauthenticated.
 * The user is then redirected to the root path.
 */
export function Logout()
{
	return (dispatch) => {
		dispatch(SetAuthToken(undefined, false));
		dispatch(push('/'));
	}	
}

/**
 * Sets the authentication token and whether the user is authenticated
 * to the given values
 *
 * Parameters:
 *		string token: 			Authentication token for the user
 *		bool   isAuthenticated: If the user is authenticated
 */
export function SetAuthToken(token, isAuthenticated)
{
  	const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
  	return {
    	type: SET_AUTH_TOKEN,
    	token: token,
    	isAuthenticated: isAuthenticated,
  	}
}

/**
 * If a login attmpet was uncessful, this action will set the auth's store
 * to reflect that there was a bad login attempt.
 *
 * Postcondition:
 *		store.auth.badLogin = true;
 */
export function BadLogin()
{
	const BAD_LOGIN = 'BAD_LOGIN'
	return {
		type: BAD_LOGIN
	}
}

/**
 * Resets the bad login value in the store to false.
 *
 * Postccondition:
 *		store.auth.badLogin = false;
 */
export function ResetAttempt()
{
	const RESET_ATTEMPT = 'RESET_ATTEMPT'
	return {
		type: RESET_ATTEMPT
	}
}