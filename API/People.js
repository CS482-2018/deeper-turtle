const peeps = require('../psuedoConnections/psuedoPeople.js');
const house = require('../psuedoConnections/psuedoHouseholds.js');
const pantry = require('../psuedoConnections/psuedoPantries.js');

var peopleRoutes = function(app)
{
  console.log('people route setup');
  app.get('/API/people', function(req, res)
  {
    //Check for database connection
    res.status(200).json(people)
  })

  app.post('/API/people/findPerson', function(req, res)
  {
		console.log(req.body);
    //Check for database connection
    var foundPerson = peeps.findPerson(req.body.firstName, req.body.lastName, req.body.birthday)
    res.status(200).json(foundPerson)
  })

	app.post('/API/people/isValid', function(req, res)
	{
		var realPerson = peeps.isValid(req.body.firstName, req.body.lastName, req.body.birthday)
		res.status(200).json(realPerson)
	})
}

module.exports = {
  peopleRoutes
}
