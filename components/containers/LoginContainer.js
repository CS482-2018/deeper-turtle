import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Login, ResetAttempt} from '../../actions/AuthActions';
import queryString from 'query-string';

import LoginDisplay from '../presentationals/LoginDisplay';

/**
 *   This class represents the front end for the Login page of the web application.
 *   It dispatches the Login action when the user submits login information and
 *   dispatches the ResetAttempt action when the component unmounts.
 *
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 *
*/
class LoginContainer extends React.Component {

    render() {
        var chosenPerson = this.props.chosenPerson;
        return(
            <div>
               <LoginDisplay invalid={this.props.badLogin} onSubmit={this.onSubmit.bind(this)}/>
            </div>
        );
    }

    onSubmit(username, password) {
        this.props.dispatchLogin(username, password, queryString.parse(this.props.searchString).redirectTo);
    }


    componentWillUnmount()
    {
        this.props.resetAttempt();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        badLogin: state.auth.badLogin,
        searchString: state.router.location.search,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchLogin: (username, password, redirectPath) => {dispatch(Login(username, password, redirectPath))},
        resetAttempt: () => {dispatch(ResetAttempt())}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);