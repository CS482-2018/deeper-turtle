/**
*	Makrs the person as chosen for the PersonFinder with the given id
*
*	personFoundObj: person found
*	id: PersonFinder to store the personFoundObj
*/
function PersonChosen(personObj, id)
{
  const PERSON_CHOSEN = 'PERSON_CHOSEN'
  return {
    type: PERSON_CHOSEN,
    personFoundObj: personObj,
    'id': id,
  }
}

export default PersonChosen;