import React from 'react';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
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
        if(status !== undefined)
        {
            //const stateProps = personFindersState.personFinders[this.props.id];
            const status = this.props.status;
            const peopleFound = this.props.peopleFound;
            console.log("status");
            console.log(status);
            console.log("peopleFound")
            console.log(peopleFound);
            return (
                <div>
                    <PersonSearchFields 
                        onSubmit = {this.props.dispatchPersonFinderRequest}
                    />
                    { 
                        (status === 'FOUND') ?
                            <PersonFound personFound={peopleFound[0]} />
                        : (status === 'DUPLICATES_FOUND') ?
                            <PersonDuplicatesFound duplicates={peopleFound} />
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
        this.props.actions.PersonRequest(fName,lName,dob,this.props.id);
    }

    componentWillMount()
    {
        console.log(this.props.dispatchPersonFinderAdd);
        //Add a PersonFinder to the state
        this.props.dispatchPersonFinderAdd();
    }
}

const mapStateToProps = (state, ownProps) => {
    if(state.personFindersState.personFinders[ownProps.id] !== undefined)
    {
        return {
            status : state.personFindersState.personFinders[ownProps.id].status,
            peopleFound : state.personFindersState.personFinders[ownProps.id].peopleFound
        }
    }
    else
    {
        return
        {
            status : "WAITING"
        }
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchPersonFinderRequest : (fName,lName,dob) => dispatch(PersonRequest(fName,lName,dob,ownProps.id)),
    dispatchPersonFinderAdd : () => dispatch(PersonFinderAdd(ownProps.id))
  }
}

//Define required props
PersonFinderContainer.propTypes = {
    id : PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonFinderContainer);