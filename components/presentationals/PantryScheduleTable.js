import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Radio from 'material-ui/Radio';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({
  title: {
    marginBottom: '10px'
  },
  container: {
        padding: '30px',
        
  },
  button: {
    marginTop : theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  scheduledTableCell : {
    color: "green",
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

        let scheduleBtnVal = null;
        var selectedPantry = this.props.selectedPantry;

        if (selectedPantry === undefined){ // if a pantry has not yet been scheduledS
          scheduleBtnVal = "SCHEDULE PANTRY VISIT";
        } else {
          scheduleBtnVal = "CANCEL PANTRY VISIT";
        }
        return (
            <Paper className={classes.container}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Selected</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Hours</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (selectedPantry === undefined) ? (
                              this.props.pantries.map((pantry, index) =>
                              {
                                  return (<TableRow key={"pantry_"+index}>
                                      <TableCell padding="checkbox">
                                              <Radio checked = {this.state.selectedIndex===index} onChange={(event,checked)=>this.handleClick(checked,index)}/>
                                      </TableCell>
                                      <TableCell>{pantry.Name}</TableCell>
                                      <TableCell>{pantry.Address}</TableCell>
                                      <TableCell>{pantry.Hours}</TableCell>
                                  </TableRow>)
                              })
                            ) : (
                              <TableRow>
                                <TableCell className={classes.scheduledTableCell}><b>SCHEDULED</b></TableCell>
                                <TableCell>{selectedPantry.Name}</TableCell>
                                <TableCell>{selectedPantry.Address}</TableCell>
                                <TableCell>{selectedPantry.Hours}</TableCell>
                              </TableRow>
                            )


                        }
                    </TableBody>
                </Table>
                <Button
                  variant="raised"
                  color="primary"
                  className={classes.button}
                  onClick={() => {
                    if(selectedPantry === undefined){
                      this.props.onSelect(this.props.pantries[this.state.selectedIndex]); // select this pantry
                    } else {
                      this.props.onCancel(); // cancel the scheduled pantry visit
                    }
                  }}
                >
                  {scheduleBtnVal}
                </Button>
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
        if(prevProps.pantries !== this.props.pantries)
            this.handleClick(true, 0, true);

    }

    handleClick(checked, index)
    {
        if(checked)
        {
            this.setState({selectedIndex: index})
        }
    }
}

//Define required props
PantryScheduleTable.propTypes = {

}

export default withStyles(styles)(PantryScheduleTable)
