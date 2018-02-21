/**
*	Sets the chosen person for the code generator
*
*	person: Array of people found
*	id: PersonFinder to store the personFoundObj
*/
function CodeGenChoosePerson(person)
{
  const CODEGEN_CHOOSE_PERSON = 'CODEGEN_CHOOSE_PERSON'
  return {
    type: CODEGEN_CHOOSE_PERSON,
    person: person,
  }
}

export default CodeGenChoosePerson;