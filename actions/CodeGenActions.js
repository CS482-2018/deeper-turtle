/**
*	Sets the chosen person for the code generator
*
*	person: Array of people found
*	id: PersonFinder to store the personFoundObj
*/
export function CodeGenChoosePerson(person)
{
  const CODEGEN_CHOOSE_PERSON = 'CODEGEN_CHOOSE_PERSON'
  return {
    type: CODEGEN_CHOOSE_PERSON,
    person: person,
  }
}

/**
*	Deletes the code (sets it to -1) of the chosenPerson
*   in for the CodeGen
*/
export function CodeGenDelete() {
  return (dispatch) => {
  		//TODO API call to delete code from person
  		dispatch(CodeGenSet(-1));
  }
}

/**
 * Redux-thunk action that generates a random code for the
 * chosenPerson for the generate.
 * Will eventually retrieve this code from an API
 */
export function CodeGenGenerate() {
  return (dispatch) => {
  		//TODO API call instead of generate code locally
  		var code = generateCode();
  		dispatch(CodeGenSet(code));
  }
}

function generateCode()
{
	return (Math.random()*0x0FFFFFF<<0);
}


/**
* Sets the code for the chosenPerson for the CodeGen
*
* code:  The code to set the chosenPerson to
*/
export function CodeGenSet(code) {
  const CODEGEN_SET = 'CODEGEN_SET'
  return {
    'type': CODEGEN_SET,
    'code': code,
  }
}