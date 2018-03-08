

// state of scheduling feature
const initialState = {
  householdCode: "",
  fName : "",
  lName : "",
  dob : "",
  address : "",
  validCode : false,
  validHeadOfHouse : false,
  availablePantries : [],
  selectedPantry : undefined,
}

function PersonSchedulerReducer(state = initialState, action) {
  switch(action.type) {
    case 'SCHEDULE_PERSON':
      let schedulePerson = Object.assign({}, state);
      // adds persons information to the state
      schedulePerson.fName = action.fName;
      schedulePerson.lName = action.lName;
      schedulePerson.dob = action.dob;
      // is this person a valid head of household based on a database query?
      schedulePerson.validHeadOfHouse = action.validHeadOfHouse;
      schedulePerson.availablePantries = action.availablePantries;
      schedulePerson.address = action.address;
      return schedulePerson;
    case 'VALIDATE_HOUSE_CODE':
      let houseCodeState = Object.assign({}, state);
      houseCodeState.householdCode = action.code; // set statet of household code
      // is household code valid based on database query
      houseCodeState.validCode = action.valid;
      return houseCodeState;
    case 'LOG_OFF_SCHEDULER':
      let logOffState = Object.assign({}, state);
      // logging off resets all the state elements
      logOffState.householdCode = "";
      logOffState.validCode = false;
      logOffState.validHeadOfHouse = false;
      logOffState.fName = "";
      logOffState.lName = "";
      logOffState.address = "";
      logOffState.dob = "";
      logOffState.availablePantries = [];
      logOffState.selectedPantry = undefined;
      return logOffState;
    case 'SCHEDULE_PANTRY_VISIT':
      let scheduleVisitState = Object.assign({}, state);
      scheduleVisitState.selectedPantry = action.selectedPantry; // set statet of household code
      return scheduleVisitState;
    case 'CANCEL_PANTRY_VISIT':
      let cancelVisitState = Object.assign({}, state);
      cancelVisitState.selectedPantry = undefined; // set statet of household code
      return cancelVisitState;
    default:
      return state
  }
}

export default PersonSchedulerReducer;
