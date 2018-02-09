import React from 'react';
import validator from 'validator';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

//Default values should only stay in for testing purposes.
const DEFAULT_FNAME = "Test";
const DEFAULT_LNAME = "Person";
const DEFAULT_DOB = "2000-01-01";
/*
 * This componenent has three text fields (first name, last name, and date of birth) and a submit
 * button.  When the submit button is pressed, a callback function is called that is passed to the
 * componenet as a prop.
 *  
 * Required props:
 *		onSubmit: function(fName, lName, dob)
 */
class PersonSearchFields extends React.Component {
	state = {
		validated : true,
		fName : { valid : true, value : DEFAULT_FNAME},
		lName : { valid : true, value : DEFAULT_LNAME},
		dob : { valid : true, value : DEFAULT_DOB},
	};

	render() {
		const { classes } = this.props;
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
		  			raised 
		  			color="primary" 
		  			className={classes.button} 
		  			onClick={ () => {
			  			
			  			if(!this.state.fName.valid || !this.state.lName.valid || !this.state.dob.valid)
			  				console.log("invalid data!");
			  			else
			  				this.props.onSubmit(this.state.fName.value, this.state.lName.value, this.state.dob.value);
			  			
		  			}}
		  		>
		  			Submit 
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
PersonSearchFields.propTypes = {
	onSubmit : PropTypes.func.isRequired
}

export default withStyles(styles)(PersonSearchFields)