import React from 'react';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
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
    width: 400,
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
  message: {
    marginTop : theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  errorMessage: {
    color : 'red',
    marginTop : theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});


/**
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 *
 *
*/
class HouseCodePage extends React.Component {

    state = {
      codeField : '', // textfield for house code
    };

    render() {

        const {classes} = this.props;
        let message = <div className={classes.message}>Enter Code Provided By KLF</div>; // default message
        if (!this.props.validCode && this.props.code != ''){
          message = <div className={classes.errorMessage}>Invalid Code</div>; // show error message if invalid code
        }

        return (

            <Paper className={classes.container}>
              <TextField
                onChange = {this.handleChange('codeField')}
                className={classes.textField} type="text"
                label="Household Code"
                id="codeField"
                />
              <Button
    		  			variant="raised"
    		  			color="primary"
    		  			className={classes.button}
    		  			onClick={() => {
                    this.props.onSubmit(this.state.codeField);
    		  			}}
                >
      		  			SUBMIT
      		  	</Button>
              {message}
            </Paper>

        )


    }


    /**
  		Update state when field name is changed
  	*/
  	handleChange = name => event => {
  		this.setState({ [name]  : event.target.value});
  	}
}

//Define required props
HouseCodePage.propTypes = {
    // TODO reaplly once logic is figured out
    //id : PropTypes.string.isRequired,
}

export default withStyles(styles)(HouseCodePage);
