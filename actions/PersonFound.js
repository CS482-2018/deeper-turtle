/**
*	Adds the found person to the state of the PersonFinder with
*	the given id.
*
*	personFoundObj: person found
*	id: PersonFinder to store the personFoundObj
*/
function PersonFound(personObj, id)
{
  const PERSON_FOUND = 'PERSON_FOUND'
  return {
    type: PERSON_FOUND,
    status: 'FOUND',
    personFoundObj: personObj,
    'id': id,
  }
}

export default PersonFound;