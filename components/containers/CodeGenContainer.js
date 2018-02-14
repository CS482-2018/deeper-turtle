import React from 'react';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';


/**
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 *
 *   RequiredProps:
 *      id: The a string representing the id of the PersonFinderContainer 
*/
class CodeGenContainer extends React.Component {

    render() {
        return(
            <div>
                <Typography type="title" >Code Gen</Typography>
            </div>
        );
    }

}



export default CodeGenContainer;