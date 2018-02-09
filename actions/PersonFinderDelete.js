/**
*	Adds a PersonFinder to the state with the given id to the state.
*
*	id: PersonFinder to delete from the state
*/
function PersonFinderDelete(id) {
  const PERSON_FINDER_DELETE = 'PERSON_FINDER_DELETE'
  return {
    'type': PERSON_FINDER_DELETE,
    'id': id,
  }
}

export default PersonFinderDelete;