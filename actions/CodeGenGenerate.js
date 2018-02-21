import CodeGenSet from './CodeGenSet';

/**
 * Redux-thunk action that generates a random code for the
 * chosenPerson for the generate.
 * Will eventually retrieve this code from an API
 */
function CodeGenGenerate() {
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

export default CodeGenGenerate;