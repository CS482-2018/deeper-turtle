import React from 'react';
import { Route } from 'react-router'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux'

import PersonFinderContainer from './PersonFinderContainer';
import HelperContainer from './HelperContainer';
import CodeGenContainer from './CodeGenContainer';
import LoginContainer from './LoginContainer';
import PrivateRouteContainer from './PrivateRouteContainer';
import SchedulerContainer from './SchedulerContainer';


import Typography from 'material-ui/Typography';

class Routes extends React.Component {

    render() {
		return (
			<ConnectedRouter history={this.props.history}>
				<div>
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
							<PersonFinderContainer id="personFinder1" />
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
					<Route exact path="/login" component={() => {
						return(
							<LoginContainer />
						);
					}}/>
				</div>
			</ConnectedRouter>
    	)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.router.location,
    }
}

Routes.propTypes = {
	history : PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Routes);
