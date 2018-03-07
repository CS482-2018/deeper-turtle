import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const styles = theme => ({
	container: {
    	padding: '30px',
  	},
  	code: {
  		marginLeft: '15px',
  		color: theme.palette.primary.main,
  	}

});

/**
 * Presentational component that labels the component with the name and address of a person
 * and displays their code or lack thereof.  It also has buttons to generate or delete the code.
 *
 * Required Props:
 *		person:  Obj, the person to display info about
 *		onGenerate: Func, the function to run when the generate button is clicked
 *		onDelete: Func, the function to run when the delete button is clicked
 */
class CodeDisplay extends React.Component
{
	render()
	{
		const {classes} = this.props;
		return(
			<Paper className={classes.container}>
				<Grid container spacing={24} >
					<Grid item xs={9}>
						<Typography variant="title">{this.props.person.fname + " " + this.props.person.lname + " (" + this.props.person.addr + ")"}</Typography><br/>
					</Grid>
					<Grid item xs={3}>
						<Button
		  					variant="raised"
		  					color="primary"
		  					onClick={this.props.onGenerate}
		  				>Generate Code</Button>
					</Grid>
					<Grid item xs={9}>
						{(this.props.person.code >=0) ?
							 <Typography variant="display3" className={classes.code}>{this.props.person.code.toString(16).toUpperCase()}</Typography> :
							 <Typography variant="display3" className={classes.code}>No Assigned Code</Typography>}
					</Grid>
					<Grid item xs={3}>
						<Button
		  					variant="raised"
		  					color="primary"
		  					onClick={this.props.onDelete}
		  				>Delete Code</Button>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

CodeDisplay.propTypes = {
	person : PropTypes.object.isRequired,
	onGenerate : PropTypes.func.isRequired,
	onDelete : PropTypes.func.isRequired
}

export default withStyles(styles)(CodeDisplay);
