// people list to help fake database query. TODO replace with actual database query
const peeps = require('../psuedoConnections/psuedoPeople.js');
const house = require('../psuedoConnections/psuedoHouseholds.js');
const pantry = require('../psuedoConnections/psuedoPantries.js');

//action that creates the list and updates the mapStateToProps


// action to add person information to the state
export function SchedulePerson(fName, lName, dob, code) {

  // find if person is valid
  const match = findPerson(fName, lName, dob, code);
  //capacity assume 4
  var tmpCap = 4;
  if (match.exists) {
    tmpCap = house.getCapacityCode(code);
  }
  var pan = pantry.getAvailable(tmpCap); // retriev availabale pantries

  const SCHEDULE_PERSON = 'SCHEDULE_PERSON';

  return {
    type: SCHEDULE_PERSON,
    fName: fName,
    lName: lName,
    dob: dob,
    address: match.address,
    validHeadOfHouse: match.exists,
    availablePantries: pan,
  };
}


// TODO Add logic to query database and validate person based on parameters
function findPerson(firstName, lastName, dob, code) {
  //get your pantries if the person is okay, set capacity at 4 currently

  var match = {
    exists: false, // does this person with this code exist in database?
    addr: '', // what is their address?
  };

  // TODO replace this loop with a database query
  var tmpPerson = peeps.findPerson(firstName, lastName, dob);
  if (tmpPerson == 'no person found') { return match;} else {
    match.exists = true;
    match.address = house.getAddressCode(code);
  }

  return match;
}

// resets state
export function LogOffScheduler() {

  const LOG_OFF_SCHEDULER = 'LOG_OFF_SCHEDULER';
  return {
    type: LOG_OFF_SCHEDULER,
  };
}

export function EnterHouseCode(houseCode) {

  var valid = findCode(houseCode);

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
