
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


const initialSource = `
## How to Generate a Code for a User

For KLF Employees:

Step 1 

Log into the KLF portal

<img src = "/img/login.jpg" width = 100%>

Step 2 

Type in the name and date of birth for the person you want to find a code for. Hit submit.

<img src = "/img/enterinfo.jpg" width = 100%>

Step 3 

If there is a code there already, reassign the existing code. Otherwise, you can regenerate 
a new code by clicking "Regenerate"

<img src = "/img/elmer.jpg" width = 100%>

`






/**
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 *
 *   RequiredProps:
 *      id: The a string representing the id of the PersonFinderContainer 
*/

class HelperContainer extends React.Component {

		render() {

			const output = '## this is a double header thing'
			return <ReactMarkdown escapeHtml = {false} source = {initialSource} />

		}
}

export default HelperContainer;