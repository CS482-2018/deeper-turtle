
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


const initialSource = `
## This is the Helper page!
1. How to enter someone's information:
2. How to modify information:
3. Lol
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
			return <ReactMarkdown source = {initialSource} />

		}
}

export default HelperContainer;