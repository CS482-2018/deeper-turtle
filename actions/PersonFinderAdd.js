/**
*	Adds a PersonFinder to the state with the given id to the state.
*
*	id: PersonFinder to add to the state
*/
function PersonFinderAdd(id) {
  const PERSON_FINDER_ADD = 'PERSON_FINDER_ADD'
  return {
    'type': PERSON_FINDER_ADD,
    'status' : 'WAITING',
    'id': id,
  }
}

export default PersonFinderAdd;