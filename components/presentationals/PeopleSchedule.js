import React from 'react';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
import validator from 'validator';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

//Actions
import PersonRequest from '../../actions/PersonRequest';
import PersonFinderAdd from '../../actions/PersonFinderAdd';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px',
    width: 800,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    marginTop : theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

// default values. TODO remove after testing phase
const DEFAULT_FNAME = "Test";
const DEFAULT_LNAME = "Person";
const DEFAULT_DOB = "2000-01-01";

/**
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 *
 *
*/
class PeopleSchedule extends React.Component {

    // local state
    state = {
      validated : true,
      fName : { valid : true, value : DEFAULT_FNAME},
      lName : { valid : true, value : DEFAULT_LNAME},
      dob : { valid : true, value : DEFAULT_DOB},
    };


    render() {

        const {classes} = this.props;

        return (

            <Paper className={classes.container}>
              <TextField
                error={!this.state.fName.valid}
                onChange={this.handleChange('fName')}
                className={classes.textField} type="text"
                label="First Name"
                id="fName"
                defaultValue={DEFAULT_FNAME}/>
              <TextField
                error={!this.state.lName.valid}
                onChange={this.handleChange('lName')}
                className={classes.textField}
                type="text"
                label="Last Name"
                id="lName"
                defaultValue={DEFAULT_LNAME}/>
              <TextField
                error={!this.state.dob.valid}
                onChange={this.handleChange('dob')}
                className={classes.textField}
                type="date"
                label="Date of Birth"
                id="dob"
                defaultValue={DEFAULT_DOB}
                InputLabelProps={{
                    shrink: true,
                }} />

                <Button
      		  			variant="raised"
      		  			color="primary"
      		  			className={classes.button}
      		  			onClick={() => {

                    this.props.onSubmit(this.state.fName.value, this.state.lName.value, this.state.dob.value, this.props.code);
      		  			}}
                >
      		  			Search Schedule
      		  		</Button>
                <Button
      		  			variant="raised"
      		  			color="primary"
      		  			className={classes.button}
      		  			onClick={() => {

                    this.props.onLogOff();
      		  			}}
                >
                  LOG OFF
      		  		</Button>
            </Paper>

        )

    }


    /**
  		Update state when field name is changed
  	*/
  	handleChange = name => event => {
  		this.setState({ validated: false, [name] : {valid: this.state[name].valid, value : event.target.value}});
  	}

  	/**
  		When state updates, validate the input in the new state
  	*/
  	componentDidUpdate(prevProps, prevState)
  	{
  		if(this.state.validated === false)
  		{
  			const validatedState = this.validateState(this.state);
  			this.setState(validatedState);
  		}
  	}
  	/**

  	Notes:
  		Doesn't sanatize
  		Should it allow non-english characters?
  		Should it allow dashes ("-") in the name
  		Any other special characters??
  	Postcondition:
  		state is marked validated. Individual fields are marked as valid or invalid
  	*/
  	validateState(nextState)
  	{
  		let validatedState = Object.assign({}, nextState);
  		const fName = validatedState.fName.value;
  		const lName = validatedState.lName.value;
  		const dob = validatedState.dob.value;
  		//not sure if isValidDate is necessary, material ui already seems to validateDates in DatePicker
  		validatedState.fName.valid = !(fName === undefined || fName === "" || !validator.isAlpha(fName));
  		validatedState.lName.valid = !(lName === undefined || lName === "" || !validator.isAlpha(lName));
  		//not sure if isValidDate is necessary, material ui already seems to validateDates in DatePicker
  		validatedState.dob.valid = !(dob === undefined || dob === "" || !this.isValidDate(dob));

  		validatedState.validated = true;
  		return validatedState;
  	}


  	/**
  		dateStr format: YYYY-MM-DD
  	*/
  	isValidDate(dateStr)
  	{
  		var dateObj = new Date(dateStr);
  		if(dateObj.toString() === "Invalid Date")
  			return false;
  		else
  			return true;
  	}
  }





//Define required props
PeopleSchedule.propTypes = {
    //id : PropTypes.string.isRequired,
}

export default withStyles(styles)(PeopleSchedule);
