import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
	container: {
    	padding: '30px',
    	marginLeft: 'auto',
    	marginRight: 'auto',
    	[theme.breakpoints.up('md')] : {
    	    width: theme.breakpoints.values.sm,
    	},
    	[theme.breakpoints.down('sm')] : {
    		maxWidth: theme.breakpoints.values.sm,
    	}
  	},
  	textField: {
    	width: '100%',
  	},
  	error: {
  		color: 'red',
  	}

});

/**
 * Presentational component That creates fields for a user to
 * log in to the web app.
 *
 * Required Props:
 *		onSubmit:  Func(username,password), the function that is called when
 *				   the user clicks the submit button.
 * Optional Props:
 *		invalid:   Bool, if true, the login will display a message saying the
 				   login attempt was unsuccessful.
 *		
 */
class LoginDisplay extends React.Component 
{
	//default local state
	state = {
		username : { valid : false, value : "" },
		password : { valid : false, value : ""},
	};

	render()
	{
		const {classes} = this.props;
		return(
			<Paper className={classes.container}>
				<Grid container spacing={16}>
					<Grid item xs={12} >
						<Typography variant="headline">Login</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="username" 
				    		id="username" 
				    		onChange={this.handleChange("username", this.notEmptyOrUndef)}
				    		error={!this.state.username.valid}
				    		className={classes.textField}/>
				    </Grid>
				    <Grid item xs={12}>
				    	<TextField
				    		label="password"
				    		id="password"
				    		type="password"
				    		onChange={this.handleChange("password", this.notEmptyOrUndef)}
				    		error={!this.state.password.valid}
				    		className={classes.textField}/> 
				    </Grid>
				    <Grid item xs={3} >
				    		<Button 
					    		variant="raised"
					    		onClick={this.handleSubmit}
					    		disabled={!this.isValid()}
					    		color="primary" >Submit</Button>
				    </Grid>
				    {this.props.invalid ?
					    <Grid item xs={6} >
					    	<Typography className={classes.error}> Invalid username or password </Typography>
					    </Grid> :
					    <div/>
					}
		    	</Grid>
			</Paper>
		);
	}

	/**
	 * Update state when field name is changed
	*/
	handleChange = (name, validateFunction) => event => {
		this.setState({ [name] : {valid: validateFunction(event.target.value), value : event.target.value}});
	}

	/**
	 * If the input is valid, submit it to the onSubmit property
	 */
	handleSubmit = () =>
	{
		if(this.isValid())
			this.props.onSubmit(this.state.username.value, this.state.password.value);
	}

	/**
	 * verify that the user input is valid
	 */
	isValid = () => {
		if(this.state.username.valid && this.state.password.valid)
			return true;
		else
			return false;
	}

	/**
	 * Verify that a stringis not empty and is not undefined
	 * 
	 * NOTE: should probably be moved to a helper class
	 */
	notEmptyOrUndef(str)
	{
		if(str !== undefined && str !== "")
			return true;
		else
			return false;
	}
}

//Define props
LoginDisplay.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	invalid: PropTypes.bool,
}

export default withStyles(styles)(LoginDisplay);