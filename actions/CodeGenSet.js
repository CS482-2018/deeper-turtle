/**
* Sets the code for the chosenPerson for the CodeGen
*
* code:  The code to set the chosenPerson to
*/
function CodeGenSet(code) {
  const CODEGEN_SET = 'CODEGEN_SET'
  return {
    'type': CODEGEN_SET,
    'code': code,
  }
}

export default CodeGenSet;