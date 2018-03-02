// people list to help fake database query. TODO replace with actual database query
const people = [
  {
    fName: 'Test',
    lName: 'Person',
    dob: '2000-01-01',
    addr: '1200 Academy St, Kalamazoo, MI 49006',
    code: '123'
  },
  {
    fName: 'Test',
    lName: 'Person',
    dob: '2000-01-01',
    addr: '1600 Pennsylvania Ave NW, Washington, DC 20500',
    code: '321'
  },
  {
    fName: 'Another',
    lName: 'Person',
    dob: '2000-01-01',
    addr: '1200 Academy St, Kalamazoo, MI 49006',
    code: 'abc'
  }
]

const A = {
"Pantries":[
    {"Name":"St. Helens", "Capacity":1, "Hours": "12-2PM", "Address":"123 Helping Hand, Kalamazoo, MI"},
    {"Name":"First Baptist", "Capacity":0, "Hours":"9-12PM", "Address":"278 Pool Dr, Mattawan, MI"},
    {"Name":"HQ", "Capacity":7, "Hours": "9-5 PM", "Address":"1 Main Street, Kalamazoo, MI"},
    {"Name":"Bells", "Capacity":7, "Hours": "1-3 PM", "Address": "1200 W. Michigan Avenue, Kalamazoo, MI"}
]
};

//action that creates the list and updates the mapStateToProps
function pantryOption(neededCap) {
  var options = [];
  for (var i = 0; i< A.Pantries.length; i++) {
    if (neededCap <= A.Pantries[i].Capacity) {
      options.push(A.Pantries[i]);
    }
  }

  //console.log(options);
  return options;
}

// action to add person information to the state
export function SchedulePerson(fName, lName, dob, code)
{

  // find if person is valid
  const match = findPerson(fName, lName, dob, code);

  var pan = pantryOption(1); // retriev availabale pantries

  const SCHEDULE_PERSON = 'SCHEDULE_PERSON'

  return {
    type: SCHEDULE_PERSON,
    fName: fName,
    lName: lName,
    dob : dob,
    address: match.address,
    validHeadOfHouse : match.exists,
    availablePantries: pan,
  }
}


// TODO Add logic to query database and validate person based on parameters
function findPerson(firstName, lastName, dob, code){
  //get your pantries if the person is okay, set capacity at 4 currently

  var match = {
    exists: false, // does this person with this code exist in database?
    addr: '', // what is their address?
  }

  // TODO replace this loop with a database query
  people.forEach((person) =>{
    // if we found the matching person
    if (person.fName === firstName && person.lName === lastName && person.dob === dob && person.code === code){
      match.exists = true;
      match.address = person.addr;
      return match;
    }
  })

  return match;
}






// resets state
export function LogOffScheduler()
{

  const LOG_OFF_SCHEDULER = 'LOG_OFF_SCHEDULER'
  return {
    type: LOG_OFF_SCHEDULER,
  }
}










// code array for testing house codes
const codes = ['123','abc','1a2b','321','cba']


export function EnterHouseCode(houseCode)
{

  var valid = findCode(houseCode);

  const VALIDATE_HOUSE_CODE = 'VALIDATE_HOUSE_CODE'
  return {
    type: VALIDATE_HOUSE_CODE,
    code: houseCode,
    valid: valid,

  }
}

// TODO replace logic with database query to check if input code exists
function findCode(code){
  return codes.includes(code);
}


// schedule person with selected pantry.
export function SchedulePantryVisit(pantry){
  const SCHEDULE_PANTRY_VISIT = 'SCHEDULE_PANTRY_VISIT'
  return {
    type: SCHEDULE_PANTRY_VISIT,
    selectedPantry: pantry,
  }
}

// cancel scheduled pantry visit
export function CancelPantryVisit(){
  const CANCEL_PANTRY_VISIT = 'CANCEL_PANTRY_VISIT'
  return {
    type: CANCEL_PANTRY_VISIT,
  }
}
