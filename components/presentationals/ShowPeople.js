import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  title: {
    marginBottom: '10px'
  }
});


/**
 * This presentational component displays an array of people.  It supports the following
 * fields:
 *      Name            person.fName + " " + person.lName
 *      Date of Birth   person.dob
 *      Address         person.addr
 * 
 * Required props:
 *      people: Array of people to be displayed
 */
class ShowPeople extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.props.people.map((person, index) =>
                        {
                            return (<TableRow key={"person_"+index}>
                                <TableCell>{person.fName + " " + person.lName}</TableCell>
                                <TableCell>{person.dob}</TableCell>
                                <TableCell>{person.addr}</TableCell>
                            </TableRow>)
                        })
                    }
                </TableBody>
            </Table>
        );
    }

}

//Define required props
ShowPeople.propTypes = {
    people : PropTypes.array.isRequired,
}

export default withStyles(styles)(ShowPeople)