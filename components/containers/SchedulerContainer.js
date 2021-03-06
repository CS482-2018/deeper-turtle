import React from 'react';
import {connect} from 'react-redux';
import { getState, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

//Presentationals
import PersonSearchFields from '../presentationals/PersonSearchFields';
import HouseCodePage from '../presentationals/HouseCodePage';
import FailedToSchedule from '../presentationals/FailedToSchedule';
import PantryScheduleTable from '../presentationals/PantryScheduleTable'

//Actions
import {LogOffScheduler, SchedulePersonRequest, ValidateHouseCodeRequest, CancelScheduledPantryVisit, SaveScheduledPantryVisit} from '../../actions/SchedulingActions';


/**
 *   This class is a container component.  It holds presentational componenets and pass
 *   the store state to the presentationals.  It also dispatches actions based on events
 *   from the presentationals. The container does not define actual react components to be
 *   rendered (i.e. presentationals), it contains the logic for which presentationals to
 *   display.
 */
class SchedulerContainer extends React.Component {


  render() {

      const {classes} = this.props;
      const validCode = this.props.validCode; // is the household code valid?
      let pantriesList = null;

      if(this.props.validHeadOfHouse){ // is the head of house personal info valid?
        pantriesList = (<PantryScheduleTable // list available pantries
                          houseCode = {this.props.code}
                          pantries = {this.props.availablePantries}
                          selectedPantry = {this.props.selectedPantry}
                          onSelect = {this.props.dispatchSchedulePantryVisitRequest}
                          onCancel = {this.props.dispatchCancelPantryVisitRequest}
                        />);
      } else if (validCode && !this.props.validHeadOfHouse && this.props.fName != ''){ // is head of house info invalid?
        pantriesList = <FailedToSchedule/>; // display a failed to schedule note component
      }

      return (
          <div>

              {
                (validCode) ?
                  <PersonSearchFields
                      onSubmit = {this.props.dispatchPersonScheduleRequest}
                      onLogOff = {this.props.dispatchLogOffRequest}
                      houseCode = {this.props.code}
                  />
                :
                  <HouseCodePage
                      onSubmit = {this.props.dispatchEnterHouseCodeRequest}
                      validCode = {this.props.validCode}
                      code = {this.props.code}
                  />
              }

              {pantriesList}
          </div>
      )

  }
}

const mapStateToProps = (state, ownProps) => {
    // retrieve state elements as props
    return {

        fName : state.personSchedulerState.fName,
        lName : state.personSchedulerState.lName,
        dob : state.personSchedulerState.dob,
        validCode : state.personSchedulerState.validCode,
        code : state.personSchedulerState.householdCode,
        validHeadOfHouse : state.personSchedulerState.validHeadOfHouse,
        availablePantries : state.personSchedulerState.availablePantries,
        selectedPantry : state.personSchedulerState.selectedPantry,
    }

}

// retireve actions as props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchPersonScheduleRequest : (fName, lName, dob, code) => dispatch(SchedulePersonRequest(fName, lName, dob, code)),
    dispatchEnterHouseCodeRequest : (code) => dispatch(ValidateHouseCodeRequest(code)),
    dispatchLogOffRequest : () => dispatch(LogOffScheduler()),
    dispatchSchedulePantryVisitRequest : (houseCode, pantry) => dispatch(SaveScheduledPantryVisit(houseCode, pantry)),
    dispatchCancelPantryVisitRequest : (houseCode) => dispatch(CancelScheduledPantryVisit(houseCode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerContainer);
