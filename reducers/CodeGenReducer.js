//define the initial state to hold all PersonFinders
const initialState = {
    person : undefined,
}

/**
 * Defines a reducer with an initialized state and logic to handle action
 * regarding the CodeGen page
 */
function CodeGenReducer(state = initialState, action) {
    switch(action.type) {
        case 'CODEGEN_CHOOSE_PERSON':
         	let chosenPerson = Object.assign({}, state);
         	if(action.person !== undefined)
            	chosenPerson.person = Object.assign({}, action.person);
            else
            	chosenPerson.person = undefined;
            return chosenPerson;
        case 'CODEGEN_SET':
        	let setPerson = Object.assign({}, state);
            if(setPerson.person !== undefined)
            {
            	var person = Object.assign({}, setPerson.person);
            	person.code = action.code;
            	setPerson.person = person;
            }
        	return setPerson;
        default:
            return state
    }
}

export default CodeGenReducer;