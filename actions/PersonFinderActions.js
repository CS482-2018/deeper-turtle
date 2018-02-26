//CLEAN test data in the absence of an API or DB connection
															//RIP deep-turtle
const people =[
	{
		fName: 'Test',
		lName: 'Person',
		dob: '2000-01-01',
		addr: '1200 Academy St, Kalamazoo, MI 49006',
		code: 343469
	},
	{
		fName: 'Test',
		lName: 'Person',
		dob: '2000-01-01',
		addr: '1600 Pennsylvania Ave NW, Washington, DC 20500',
		code: 252391
	},
	{
		fName: 'Another',
		lName: 'Person',
		dob: '2000-01-01',
		addr: '1200 Academy St, Kalamazoo, MI 49006',
		code: 15551529
	}
]

/**
 * Redux-thunk action that attempts to find a matching person
 * and dispatches an apropriate action based on the result.
 */
export function PersonRequest(firstName, lastName, dob, id) {
  return (dispatch) => {
  		var foundPeople = matchPerson(firstName, lastName, dob);
  		if(foundPeople.length == 0)
  			dispatch(PersonNotFound(id))
  		else
  			dispatch(PeopleFound(foundPeople, id));
  }
}

/**
 * Returns an array of people with a matching first name, last name, and
 * date of birth.
 * Returns:
 * 		foundPeople: [{},{}]
*/
function matchPerson(firstName, lastName, dob)
{
	var foundPeople = [];
	people.forEach((element) =>{
		if(element.fName === firstName && element.lName === lastName && element.dob === dob)
		{
			foundPeople.push(element);
		}

	})
	return foundPeople;
}

/**
*	Adds the found people to the state of the PersonFinder with
*	the given id.
*
*	peopleFound: Array of people found
*	id: PersonFinder to store the personFoundObj
*/
function PeopleFound(peopleFound, id)
{
  const PEOPLE_FOUND = 'PEOPLE_FOUND'
  return {
    type: PEOPLE_FOUND,
    status: 'PEOPLE_FOUND',
    peopleFound: peopleFound,
    'id': id,
  }
}

/**
*	Adds a PersonFinder to the state with the given id to the state.
*
*	id: PersonFinder to add to the state
*/
export function PersonFinderAdd(id) {
  const PERSON_FINDER_ADD = 'PERSON_FINDER_ADD'
  return {
    'type': PERSON_FINDER_ADD,
    'status' : 'WAITING',
    'id': id,
  }
}

/**
*	Adds a PersonFinder to the state with the given id to the state.
*
*	id: PersonFinder to delete from the state
*/
export function PersonFinderDelete(id) {
  const PERSON_FINDER_DELETE = 'PERSON_FINDER_DELETE'
  return {
    'type': PERSON_FINDER_DELETE,
    'id': id,
  }
}

/**
 * Changes the status of PersonFinder with the given id to
 * indicate that a person was not found.
 */
export function PersonNotFound(id) {
  const PERSON_NOT_FOUND = 'PERSON_NOT_FOUND'
  return {
    'type': PERSON_NOT_FOUND,
    'status': 'NOT_FOUND',
    'id': id,
  }
}