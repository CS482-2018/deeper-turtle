//define the initial state to hold all PersonFinders
const initialState = {
  personFinders : {},
}

const initialPersonFinderState = {
  status : "WAITING",
  peopleFound : [],
}

/**
 * Defines a reducer with an initialized state and logic to handle action
 * regarding all PersonFinders within the application
 */
function PersonFindersReducer(state = initialState, action) {
  switch(action.type) {
    case 'PERSON_FOUND':
      let personFound = Object.assign({}, state);
      personFound.personFinders[action.id].peopleFound = [action.personFoundObj];
      personFound.personFinders[action.id].status = action.status;
      return personFound;
    case 'PERSON_DUPLICATES_FOUND':
      let duplicates = Object.assign({}, state);
      duplicates.personFinders[action.id].peopleFound = action.peopleFound;
      duplicates.personFinders[action.id].status = action.status;
      return duplicates;
    case 'PERSON_NOT_FOUND':
      let notFound = Object.assign({}, state);
      notFound.personFinders[action.id].status = action.status
      return notFound;
    case 'PERSON_FINDER_ADD':
      let addedPersonFinder = Object.assign({}, state);
      addedPersonFinder.personFinders[action.id] = Object.assign({}, initialPersonFinderState);
      return addedPersonFinder;
    case 'PERSON_FINDER_DELETE':
      let deletedPersonFinder = Object.assign({}, state);
      delete deletedPersonFinder.personFinders[action.id];
      return deletedPersonFinder;
    default:
      return state
  }
}

export default PersonFindersReducer;