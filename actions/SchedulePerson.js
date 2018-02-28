
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


// action to add person information to the state
function SchedulePerson(fName, lName, dob, code)
{
  // find if person is valid
  const match = findPerson(fName, lName, dob, code);

  const SCHEDULE_PERSON = 'SCHEDULE_PERSON'
  return {
    type: SCHEDULE_PERSON,
    fName: fName,
    lName: lName,
    dob : dob,
    address: match.address,
    validHeadOfHouse : match.exists,
  }
}


// TODO Add logic to query database and validate person based on parameters
function findPerson(firstName, lastName, dob, code){
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

export default SchedulePerson;
