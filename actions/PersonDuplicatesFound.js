/**
*	Adds the following duplicates to the state of the person finder
*	with the given id.
*
*	duplicates: duplicates found
*	id: PersonFinder to store duplicates
*/
function PersonDuplicatesFound(duplicates, id) {
  const PERSON_DUPLICATES_FOUND = 'PERSON_DUPLICATES_FOUND'
  return {
    'type': PERSON_DUPLICATES_FOUND,
    'status': 'DUPLICATES_FOUND',
    'peopleFound': duplicates,
    'id': id,
  }
}

export default PersonDuplicatesFound;