import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import { PersonRequest, PersonFinderAdd, PersonFinderDelete } from '../../actions/PersonFinderActions';

//Presentationals
import PersonSearchFields from '../presentationals/PersonSearchFields';
import PersonNotFound from '../presentationals/PersonNotFound';
import PeopleTable from '../presentationals/PeopleTable';

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
class PersonFinderContainer extends React.Component {

    render() {
        const {classes, onPersonChosen} = this.props;
        if(status !== undefined)
        {
            //const stateProps = personFindersState.personFinders[this.props.id];
            const status = this.props.status;
            const peopleFound = this.props.peopleFound;
            const chosenPerson = this.props.chosenPerson;
            return (
                <div>
                    <PersonSearchFields 
                        onSubmit = {this.props.dispatchPersonFinderRequest}
                    />
                    { 
                        (status === 'PEOPLE_FOUND') ?
                            ((onPersonChosen !== undefined) ?
                                <PeopleTable selectable onSelect={onPersonChosen} people={this.props.peopleFound} /> :
                                <PeopleTable people={this.props.peopleFound} />)
                        : (status === 'NOT_FOUND') ?
                            ((onPersonChosen !== undefined) ?
                                <PersonNotFound setChosenUndef={()=>onPersonChosen(undefined)}/> :
                                <PersonNotFound />)
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
        this.props.actions.PersonRequest(fName,lName,dob,this.props.id);
    }

    componentWillMount()
    {
        console.log(this.props.dispatchPersonFinderAdd);
        //Add a PersonFinder to the state
        this.props.dispatchPersonFinderAdd();
    }

    componentWillUnmount()
    {
        this.props.dispatchPersonFinderDelete();
    }
}

const mapStateToProps = (state, ownProps) => {

    //ensure that PersonFinderAdd has finished

    if(state.personFindersState.personFinders[ownProps.id] !== undefined)
    {
        return {
            status : state.personFindersState.personFinders[ownProps.id].status,
            peopleFound : state.personFindersState.personFinders[ownProps.id].peopleFound,
        }
    }

    //wait for PersonFinderAdd to update the state
    else
    {
        return {
            status : "WAITING"
        }
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchPersonFinderRequest : (fName,lName,dob) => dispatch(PersonRequest(fName,lName,dob,ownProps.id)),
    dispatchPersonFinderAdd : () => dispatch(PersonFinderAdd(ownProps.id)),
    dispatchPersonFinderDelete : () => dispatch(PersonFinderDelete(ownProps.id))
  }
}

//Define required props
PersonFinderContainer.propTypes = {
    id : PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonFinderContainer);