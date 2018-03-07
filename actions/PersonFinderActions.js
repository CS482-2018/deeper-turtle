import $ from 'jquery';

/**
 * Redux-thunk action that attempts to find a matching person
 * and dispatches an apropriate action based on the result.
 */
export function PersonRequest(firstName, lastName, dob, id) {
  return (dispatch) => {
		var options = {
				method: "POST",
				url: "API/peopleSearch",
				data: JSON.stringify({fname: firstName, lname: lastName, dob: dob}),
				contentType: "application/json",
		}
		$.ajax(options).then((data, status, j) => {
			if(data.length == 0)
  			dispatch(PersonFoundError(id, "Person not found"))
  		else
  			dispatch(PeopleFound(data, id));
		},
		(jxhr, status, err) => {
			dispatch(PersonFoundError(id, "Error connecting to API"))
		})
  }
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
export function PersonFoundError(id, message) {
  const PERSON_FOUND_ERROR = 'PERSON_FOUND_ERROR'
  return {
    'type': PERSON_FOUND_ERROR,
    'status': 'ERROR',
    'id': id,
		'message': message
  }
}
