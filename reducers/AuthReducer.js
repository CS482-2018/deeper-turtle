//define the initial state for authentication
const initialState = {
    token : undefined,
    isAuthenticated : false,
    badLogin: false,
}

/**
 * Defines a reducer with an initialized state and logic to handle action
 * regarding the Authentication of the program
 * State:
 * {
 *      token:              The authentication token for a user
 *      isAuthenticated:    If the user has been authenticated
 *      badLogin:           If there has been a bad login attempt
 * }
 */
function AuthReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_AUTH_TOKEN':
         	let setAuth = Object.assign({}, state);
         	setAuth.token = action.token;
            setAuth.isAuthenticated = action.isAuthenticated;
            return setAuth;
        case 'BAD_LOGIN':
            let badLogin = Object.assign({}, state);
            badLogin.badLogin = true;
            return badLogin
        case 'RESET_ATTEMPT':
            let reset = Object.assign({}, state);
            reset.badLogin = false;
            return reset;
        default:
            return state
    }
}

export default AuthReducer;