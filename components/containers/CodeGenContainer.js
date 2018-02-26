import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PersonFinderContainer from './PersonFinderContainer';
import CodeDisplay from '../presentationals/CodeDisplay';

import {CodeGenChoosePerson, CodeGenGenerate, CodeGenDelete} from '../../actions/CodeGenActions';
/*
import CodeGenChoosePerson from '../../actions/CodeGenChoosePerson';
import CodeGenGenerate from '../../actions/CodeGenGenerate';
import CodeGenDelete from '../../actions/CodeGenDelete';

*/

/**
 *   This class represents the front end for the Code Generator page of the web application.
 *   It allows the user to select a person from the database and generate or delete that person's code.
 *
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 *
*/
class CodeGenContainer extends React.Component {

    render() {
        var chosenPerson = this.props.chosenPerson;
        return(
            <div>
                <PersonFinderContainer onPersonChosen={this.props.dispatchCodeGenChoosePerson} id="codeGenPicker" >Code Gen</PersonFinderContainer>
                {chosenPerson !== undefined ? <CodeDisplay onGenerate={this.props.dispatchCodeGenGenerate} onDelete={this.props.dispatchCodeGenDelete} person={chosenPerson} /> : <div/>}
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    if(state.personFindersState.personFinders["codeGenPicker"]!==undefined)
        return {
            status: state.personFindersState.personFinders["codeGenPicker"].status,
            chosenPerson: state.codeGenState.person,
        }
    else
        return {status: "WAITING", chosenPerson: undefined}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchCodeGenChoosePerson : (person) => dispatch(CodeGenChoosePerson(person)),
    dispatchCodeGenGenerate : () => dispatch(CodeGenGenerate()),
    dispatchCodeGenDelete : () => dispatch(CodeGenDelete()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeGenContainer);