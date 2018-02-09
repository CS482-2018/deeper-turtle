import PersonFound from './PersonFound';
import PersonNotFound from './PersonNotFound';
import PersonDuplicatesFound from './PersonDuplicatesFound';

//CLEAN test data in the absence of an API or DB connection
															//RIP deep-turtle
const people =[
	{
		fName: 'Test',
		lName: 'Person',
		dob: '2000-01-01',
		addr: '1200 Academy St, Kalamazoo, MI 49006'
	},
	{
		fName: 'Test',
		lName: 'Person',
		dob: '2000-01-01',
		addr: '1600 Pennsylvania Ave NW, Washington, DC 20500'
	},
	{
		fName: 'Another',
		lName: 'Person',
		dob: '2000-01-01',
		addr: '1200 Academy St, Kalamazoo, MI 49006'
	}
]

/**
 * Redux-thunk action that attempts to find a matching person
 * and dispatches an apropriate action based on the result.
 */
function PersonRequest(firstName, lastName, dob, id) {
  return (dispatch) => {
  		var foundPeople = matchPerson(firstName, lastName, dob);
  		if(foundPeople.length == 0)
  			dispatch(PersonNotFound(id))
  		else if(foundPeople.length == 1)
  			dispatch(PersonFound(foundPeople[0], id))
  		else
  			dispatch(PersonDuplicatesFound(foundPeople, id));
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

export default PersonRequest