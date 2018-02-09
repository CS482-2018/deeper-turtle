import React from 'react';
import { getState } from 'redux';
import PropTypes from 'prop-types';

//Presentationals
import PersonSearchFields from '../presentationals/PersonSearchFields';
import PersonFound from '../presentationals/PersonFound';
import PersonNotFound from '../presentationals/PersonNotFound';
import PersonDuplicatesFound from '../presentationals/PersonDuplicatesFound';

//Actions
import PersonRequest from '../../actions/PersonRequest';
import PersonFinderAdd from '../../actions/PersonFinderAdd';


/**
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 *
 *   RequiredProps:
 *      store: Redux store with state of the application
 *      id: The a string representing the id of the PersonFinderContainer 
*/
class PersonFinderContainer extends React.Component {

    render() {
        const {classes} = this.props;
        const personFindersState = this.props.store.getState().personFindersState;
        if(personFindersState.personFinders[this.props.id] !== undefined)
        {
            const stateProps = personFindersState.personFinders[this.props.id];
            const status = stateProps.status;
            return (
                <div>
                    <PersonSearchFields 
                        onSubmit = {this.dispatchPersonRequest.bind(this)}
                    />
                    { 
                        (status === 'FOUND') ?
                            <PersonFound personFound={stateProps.peopleFound[0]} />
                        : (status === 'DUPLICATES_FOUND') ?
                            <PersonDuplicatesFound duplicates={stateProps.peopleFound} />
                        : (status === 'NOT_FOUND') ?
                            <PersonNotFound /> 
                        : <div />
                    } 
                </div>
            )
        }
        //dispatch to add PersonFinder has not finished
        else
        {
            return ( <div />)
        }
    }

    /**
        This function is passed the the PersonSearchFields presentational, so a PersonRequest 
        action can be dispatched when a search is submitted.
    */
    dispatchPersonRequest(fName, lName, dob)
    {
        this.props.store.dispatch(PersonRequest(fName,lName,dob,this.props.id));
    }

    componentWillMount()
    {
        //Add a PersonFinder to the state
        this.props.store.dispatch(PersonFinderAdd(this.props.id));
        //subscribe to the store for state updates.
        this.props.store.subscribe(this.forceUpdate.bind(this));
    }
}

//Define required props
PersonFinderContainer.propTypes = {
    store : PropTypes.object.isRequired,
    id : PropTypes.string.isRequired,
}

export default PersonFinderContainer;