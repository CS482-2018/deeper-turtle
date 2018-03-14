import $ from 'jquery';

/*
  sends pantry data to backend to be saved and then
  calls function to change local state
*/
export function SaveScheduledPantryVisit(houseCode, pantry){

  return (dispatch) => {
  		var options = {
  				method: "POST",
  				url: "API/pantries/schedulePantryVisit",
  				data: JSON.stringify({houseCode : houseCode, pantry : pantry}),
  				contentType: "application/json",
  		}
  		$.ajax(options).then((data, status, j) => {
        console.log('House ' + data.houseCode + ' scheduled a pantry visit to ' + data.pantry.Name + ' today at ' + data.pantry.Hours);
        dispatch(SchedulePantryVisit(pantry));
  		},
  		(jxhr, status, err) => {
  			console.log("Failed To Schedule Pantry Visit")
  		})
  }
}

/*
 sends request to backend to cancel current pantry visit before
 calling function to edit the local state
*/
export function CancelScheduledPantryVisit(houseCode){

  return (dispatch) => {
  		var options = {
  				method: "POST",
  				url: "API/pantries/cancelPantryVisit",
  				data: JSON.stringify({houseCode : houseCode}),
  				contentType: "application/json",
  		}
  		$.ajax(options).then((data, status, j) => {
        console.log('House ' + houseCode + ' canceled its pantry visit today')
        dispatch(CancelPantryVisit());
  		},
  		(jxhr, status, err) => {
  			console.log("Failed To Cancel Pantry Visit")
  		})
  }
}

// validate and person trying to schdule a pantry visit
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

// validat house code with ajax request
export function ValidateHouseCodeRequest(houseCode) {

  return (dispatch) => {
		var options = {
				method: "POST",
				url: "API/households/validCode",
				data: JSON.stringify({inputCode: houseCode}),
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

// save entered house code to state and indicate if it is valid
export function EnterHouseCode(houseCode, valid) {

  const VALIDATE_HOUSE_CODE = 'VALIDATE_HOUSE_CODE';
  return {
    type: VALIDATE_HOUSE_CODE,
    code: houseCode,
    valid: valid,

  };
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
