import React from 'react';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';




const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px',
  },

});


/**
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 *
 *   RequiredProps:
 *      id: The a string representing the id of the PersonContainer
*/
class FailedToSchedule extends React.Component {



    render() {
      const {classes} = this.props;

      return (

          <Paper className={classes.container}>
            Failed to authenticate head of household data.<br/><br/>
            Make sure above fields are filled in with the correct head of household information.<br/>
            If problem persists, log off and then re-enter household code.
            <br/><br/>
            Call KLF for more information.
          </Paper>

      )

    }


  }





//Define required props
FailedToSchedule.propTypes = {
    // TODO reaplly once logic is figured out
    //id : PropTypes.string.isRequired,
}

export default withStyles(styles)(FailedToSchedule);
