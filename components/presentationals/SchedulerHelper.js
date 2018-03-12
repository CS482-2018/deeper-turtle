
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const initialSource = `
## How to schedule yourself

In order to use this you need:
		A code from Kalamazoo Loaves and Fishes
		A stable internet connection 
		Self-scheduling privileges
		
If you do not have any of these things, call into Kalamazoo Loaves and Fishes

### WALKTHROUGH

#### Step1: 

Enter your house code into the given field (1234 is the example here, yours will look different)
If your house code does not work, check your input it needs to be exactly what you were given from Kalamazoo Loaves and Fishes
<img src = "/img/Step1.png" height = "500" >


											Step2: 
Enter the information for your head of household (First Name, Last Name, and Date of Birth)										
<img src = "/img/Step2.png" height = "500" >

If you see an error message, you haven't entered the head of household correctly. Double check the infromation
is correct and then if errors persist try other members of your house. If errors still continue, call into Kalamazoo
Loaves and Fishes to schedule
<img src = "/img/Step2a.png" height = "500" >


											Step3: 
Once you have entered the correct information it will take you to the scheduling page
Below select your pantry and click the schedule button to reserve your slots 

<img src = "/img/Step3.png" height = "500" >


											FAQ:

WHY AM I NOT SEEING EVERY PANTRY?
 Only pantries with available capacity to fit your household are displayed
 
HOW DO I GET A CODE?
	Call into Kalamazoo Loaves and Fishes to see if you are eligible
	
I CANT LOG IN
	Double check that your input is correct and there are no typos, if problems still persist call KLF and schedule manually
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
			return (
                <div className="styledMarkdown" >
                    <ReactMarkdown escapeHtml = {false} source = {initialSource} />
                </div>
            )

		}
}

export default HelperContainer;