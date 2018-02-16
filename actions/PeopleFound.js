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

export default PeopleFound;