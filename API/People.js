const peeps = require('../psuedoConnections/psuedoPeople.js');
const house = require('../psuedoConnections/psuedoHouseholds.js');
const pantry = require('../psuedoConnections/psuedoPantries.js');

function matchPerson(firstName, lastName, dob)
{
	var foundPeople = [];
	people.forEach((element) =>{
		if(element.fname === firstName && element.lname === lastName && element.dob === dob)
		{
			foundPeople.push(element);
		}
	})
	return foundPeople;
}

var peopleRoutes = function(app)
{
  console.log('people route setup');
  app.get('/API/people', function(req, res)
  {
    //Check for database connection
    res.status(200).json(people)
  })

  app.post('/API/peopleSearch', function(req, res)
  {
    //Check for database connection
    var foundPeople = matchPerson(req.body.fname, req.body.lname, req.body.dob)
    res.status(200).json(foundPeople)
  })
}

module.exports = {
  peopleRoutes
}
