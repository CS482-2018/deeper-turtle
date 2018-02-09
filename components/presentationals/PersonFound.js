import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import ShowPeople from './ShowPeople';

const styles = theme => ({
    container: {
        padding: '30px',
    },
    title: {
        marginBottom: '10px'
    }
});

/**
 * This presentational componenet shows a single person that has been found.
 * The person is shown using a ShowPeople presentational componenet.
 * Required props:
 *      personFound: A the person to display.
 */
class PersonFound extends React.Component {
    render() {
        const {classes} = this.props;
        return (
        	<Paper className={classes.container}>
                <Typography className={classes.title} type="headline"> Person Selected </Typography>
                <ShowPeople people = {[this.props.personFound]}/>
            </Paper>
        )
    }
}

//Define required props
PersonFound.propTypes = {
    personFound: PropTypes.object.isRequired,
}

export default withStyles(styles)(PersonFound)