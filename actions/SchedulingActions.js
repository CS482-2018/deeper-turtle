import $ from 'jquery';

// people list to help fake database query. TODO replace with actual database query
const peeps = require('../psuedoConnections/psuedoPeople.js');
const house = require('../psuedoConnections/psuedoHouseholds.js');
const pantry = require('../psuedoConnections/psuedoPantries.js');

//action that creates the list and updates the mapStateToProps

export function SchedulePersonRequest(firstName, lastName, dob, code) {
  var person = {
    fname: firstName,
    lname: lastName,
    dob: dob,
    address : "",
    validHeadOfHouse: false,
    availablePantries: [],

  }

  return (dispatch) => {
		var options = {
				method: "POST",
				url: "API/people/schedulePerson",
				data: JSON.stringify({code: code, fname: firstName, lname: lastName, dob: dob}),
				contentType: "application/json",
		}
		$.ajax(options).then((data, status, j) => {
      dispatch(SchedulePerson(data))
		},
		(jxhr, status, err) => {
			dispatch(SchedulePerson(person))
		})
  }
}

export function ValidateHouseCodeRequest(houseCode) {

  return (dispatch) => {
		var options = {
				method: "POST",
				url: "API/houses/validCode",
				data: JSON.stringify({code: houseCode}),
				contentType: "application/json",
		}
		$.ajax(options).then((data, status, j) => {
      dispatch(EnterHouseCode(houseCode, data))
		},
		(jxhr, status, err) => {
			dispatch(EnterHouseCode(houseCode, data))
		})
  }
}


// action to add person information to the state
export function SchedulePerson(scheduledPerson) {


  const SCHEDULE_PERSON = 'SCHEDULE_PERSON';

  return {
    type: SCHEDULE_PERSON,
    fName: scheduledPerson.fname,
    lName: scheduledPerson.lname,
    dob: scheduledPerson.dob,
    address : scheduledPerson.address,
    validHeadOfHouse: scheduledPerson.validHeadOfHouse,
    availablePantries: scheduledPerson.availablePantries,
  };
}


// resets state
export function LogOffScheduler() {

  const LOG_OFF_SCHEDULER = 'LOG_OFF_SCHEDULER';
  return {
    type: LOG_OFF_SCHEDULER,
  };
}

export function EnterHouseCode(houseCode, valid) {

  const VALIDATE_HOUSE_CODE = 'VALIDATE_HOUSE_CODE';
  return {
    type: VALIDATE_HOUSE_CODE,
    code: houseCode,
    valid: valid,

  };
}

// TODO replace logic with database query to check if input code exists
function findCode(code) {
  var a = house.validCode(code);
  console.log('Valid code returns ', a);
  return a;
}


// schedule person with selected pantry.
export function SchedulePantryVisit(pantry) {
  const SCHEDULE_PANTRY_VISIT = 'SCHEDULE_PANTRY_VISIT';
  return {
    type: SCHEDULE_PANTRY_VISIT,
    selectedPantry: pantry,
  };
}

// cancel scheduled pantry visit
export function CancelPantryVisit() {
  const CANCEL_PANTRY_VISIT = 'CANCEL_PANTRY_VISIT';
  return {
    type: CANCEL_PANTRY_VISIT,
  };
}
