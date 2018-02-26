import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Route, Switch } from 'react-router'
/**
 * Creates a route with the given props and redirects the user to the login
 * page if they are not authenticated.
 * 
 * Code based on authentication example in react-router docs
*/
class PrivateRouteContainer extends React.Component {
  
  render() {
    const {
      isAuthenticated,
      ...props
    } = this.props
      return (<div>{isAuthenticated ? <Route {...props} /> : null }</div>)

  }

  /**
   * Redirect when the component mounts if necessary
   */
  componentWillMount()
  {
    this.redirectIfNotAuth(this.props.location.pathname, this.props.isAuthenticated);
  }

  /**
   * Redirect when the component updates if necessary
   */
  componentWillReceiveProps(nextProps)
  {
    this.redirectIfNotAuth(nextProps.location.pathname, nextProps.isAuthenticated);
  }

  /**
   * Redirect if the routuer's current path is the same as the
   * protected path and the user is not authenticated. 
   */
  redirectIfNotAuth = (path, isAuthenticated) => {
    if(!isAuthenticated && (path === this.props.path))
    {
      this.props.redirect('/login?redirectTo='+this.props.path);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.router.location,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        redirect : (path) => dispatch(push(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouteContainer)