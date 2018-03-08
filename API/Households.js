const peeps = require('../psuedoConnections/psuedoPeople.js');
const house = require('../psuedoConnections/psuedoHouseholds.js');
const pantry = require('../psuedoConnections/psuedoPantries.js');

function matchHousehold(homeAddress, homeCode)
{
	var foundHousehold = [];
	households.forEach((element) =>{
		if(element.address === homeAddress || element.code === homeCode)
		{
			foundHousehold.push(element);
		}
	})
	return foundHousehold;
}

var householdRoutes = function(app)
{
  console.log('household route setup');
  app.get('/API/households', function(req, res)
  {
    res.status(200).json(households)
  })

  app.post('/API/householdSearch', function(req, res)
  {
    //Check for database connection
    var foundHousehold = matchHousehold(req.body.address, req.body.code)
    res.status(200).json(foundHousehold)
  })

	app.post('/API/houses/validCode', function(req, res)
  {
    // return if the given code is linked to a valid house
    var validCode = house.validCode(req.body.code)
    res.status(200).json(validCode)
  })

}

module.exports = {
  householdRoutes
}
