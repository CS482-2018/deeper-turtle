import CodeGenSet from './CodeGenSet'
/**
*	Deletes the code (sets it to -1) of the chosenPerson
*   in for the CodeGen
*/
function CodeGenDelete() {
  return (dispatch) => {
  		//TODO API call to delete code from person
  		dispatch(CodeGenSet(-1));
  }
}

export default CodeGenDelete;