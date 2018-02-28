import React from 'react';
import {connect} from 'react-redux';

import AppFrame from '../presentationals/AppFrame';

import { Logout } from '../../actions/AuthActions';

class AppFrameContainer extends React.Component {

	render()
	{
		return (
			<AppFrame isAuthenticated={this.props.isAuthenticated} currentPath={this.props.location} onLogout={this.props.dispatchLogout}>
				{this.props.children}
			</AppFrame>
		);
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
    dispatchLogout : () => dispatch(Logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppFrameContainer);
