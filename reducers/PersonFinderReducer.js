//define the initial state to hold all PersonFinders
const initialState = {
  personFinders : {},
}

const initialPersonFinderState = {
  status : "WAITING",
  peopleFound : [],
  chosenPerson: undefined,
}

/**
 * Defines a reducer with an initialized state and logic to handle action
 * regarding all PersonFinders within the application
 */
function PersonFindersReducer(state = initialState, action) {
  switch(action.type) {
    case 'PEOPLE_FOUND':
      let personFound = Object.assign({}, state);
      var finder = Object.assign({}, personFound.personFinders[action.id])
      finder.peopleFound = action.peopleFound;
      finder.status = action.status;
      personFound.personFinders[action.id] = finder;
      return personFound;
    case 'PERSON_NOT_FOUND':
      let notFound = Object.assign({}, state);
      var finder = Object.assign({}, notFound.personFinders[action.id])
      finder.status = action.status
      finder.chosenPerson = undefined;
      finder.peopleFound = [];
      notFound.personFinders[action.id] = finder;
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