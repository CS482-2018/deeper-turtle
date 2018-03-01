import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Radio from 'material-ui/Radio';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  title: {
    marginBottom: '10px'
  },
  container: {
        padding: '30px',
    },
});


/**
 * This presentational component displays an array of people.  It supports the following
 * fields:
 *      Name            person.fName + " " + person.lName
 *      Date of Birth   person.dob
 *      Address         person.addr
 *
 * Optionally, you can use it to select a person in the table and can have the componenet
 * call a callback function once the person has been selected.
 *
 * Required props:
 *      people: Array of people to be displayed
 *
 * Optional props:
 *      selectable: Boolean, if true, one can select a person from the table
 *      onSelect(person): Function, if selectable, this function is required.
 */


class PantryScheduleTable extends React.Component {

    render() {
        const { classes } = this.props;
        let { selectable } = this.props;
        if(selectable === undefined)
            selectable = false;
        return (
            <Paper className={classes.container}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {selectable?<TableCell>Selected</TableCell> : null}
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
                                    {selectable
                                        ? <TableCell padding="checkbox">
                                            <Radio checked = {this.state.selectedIndex===index} onChange={(event,checked)=>this.handleClick(checked,index)}/>
                                        </TableCell>
                                        : null}
                                    <TableCell>{person.fName + " " + person.lName}</TableCell>
                                    <TableCell>{person.dob}</TableCell>
                                    <TableCell>{person.addr}</TableCell>
                                </TableRow>)
                            })
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }

    componentWillMount()
    {
        //select the first person by default
        this.handleClick(true, 0);
    }

    componentDidUpdate(prevProps, prevState)
    {
        //select the first person by default if the people in the table have changed
        if(prevProps.people !== this.props.people)
            this.handleClick(true, 0, true);

    }

    handleClick(checked, index)
    {
        if(checked && (this.props.selectable !== undefined || this.props.selectable === false))
        {
            this.setState({selectedIndex: index})
            this.props.onSelect(this.props.people[index]);
        }
    }
}

//Define required props
PantryScheduleTable.propTypes = {
    
}

export default withStyles(styles)(PantryScheduleTable)
