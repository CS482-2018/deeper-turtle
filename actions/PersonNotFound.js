/**
 * Changes the status of PersonFinder with the given id to
 * indicate that a person was not found.
 */
function PersonNotFound(id) {
  const PERSON_NOT_FOUND = 'PERSON_NOT_FOUND'
  return {
    'type': PERSON_NOT_FOUND,
    'status': 'NOT_FOUND',
    'id': id,
  }
}

export default PersonNotFound;