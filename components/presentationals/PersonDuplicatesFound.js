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
 * This presnetational component displays an array of duplicate people found.
 * The data is shown in a ShowPeople presentational component.
 * Required Props:
 *      duplicates:  An array of the duplicates to be displayed
 */
class PersonDuplicatesFound extends React.Component {
    render() {
        const {classes} = this.props;
        return (
        	<Paper className={classes.container}>
                <Typography className={classes.title} type="headline"> Duplicates Found </Typography>
                <ShowPeople people= {this.props.duplicates}/>
            </Paper>
        )
    }
}

//Define required props
PersonDuplicatesFound.propTypes = {
    duplicates: PropTypes.array.isRequired,
}

export default withStyles(styles)(PersonDuplicatesFound)