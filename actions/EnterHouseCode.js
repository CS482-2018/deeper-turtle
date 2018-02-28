
// code array for testing
const codes = ['123','abc','1a2b','321','cba']


function EnterHouseCode(houseCode)
{

  var valid = findCode(houseCode);

  const VALIDATE_HOUSE_CODE = 'VALIDATE_HOUSE_CODE'
  return {
    type: VALIDATE_HOUSE_CODE,
    code: houseCode,
    valid: valid,

  }
}

// TODO replace logic with database query to check if input code exists
function findCode(code){
  return codes.includes(code);
}

export default EnterHouseCode;
