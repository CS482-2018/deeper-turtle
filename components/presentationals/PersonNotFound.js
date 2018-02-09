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
 * This presentational componenet dipslays a message within a paper componenent that nobody was found.
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

}

export default withStyles(styles)(PersonNotFound)