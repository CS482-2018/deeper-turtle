import $ from 'jquery';

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
  return (dispatch, getState) => {
    const { codeGenState } = getState();
    const { person } = codeGenState;
    var options = {
      method: "POST",
      url: "API/people/deleteCode",
      data: JSON.stringify(person),
      contentType: "application/json",
    }
    $.ajax(options).then((data, status, j) => {
      if(status === 'success') {
        dispatch(CodeGenSet(-1));
      }
    },
    (jxhr, status, err) => {
      //handle error
      console.log('failure')
    })
  }
}

/**
 * Redux-thunk action that generates a random code for the
 * chosenPerson for the generate.
 * Will eventually retrieve this code from an API
 */
export function CodeGenGenerate() {
  return (dispatch, getState) => {
      const { codeGenState } = getState();
      const { person } = codeGenState;

      var options = {
        method: "POST",
        url: "API/people/generateCode",
        data: JSON.stringify(person),
        contentType: "application/json",
      }
      $.ajax(options).then((data, status, j) => {
        if(status === 'success') {
          dispatch(CodeGenSet(data.code));
        }
      },
      (jxhr, status, err) => {
        //handle error
        console.log('failure')
      })
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