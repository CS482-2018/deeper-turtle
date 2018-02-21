import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  container: {
    padding: '30px',
  },
  title: {
    marginBottom: '10px'
  }
});


/**
 * This presentational component dipslays a message within a paper component that nobody was found.
 *
 * Optional props:
 *    setChosenUndef: Function, this function is called on mount to set the chosenPerson to undefined
 */
class PersonNotFound extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.container}>
                <Typography className={classes.title} type="headline"> Person Not Found </Typography>
            </Paper> 
        );
    }

    componentWillMount()
    {
      if(this.props.setChosenUndef !== undefined)
        this.props.setChosenUndef();
    }

}

PersonNotFound.propTypes = {
  setChosenUndef: PropTypes.func,
}

export default withStyles(styles)(PersonNotFound)