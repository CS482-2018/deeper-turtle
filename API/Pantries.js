const peeps = require('../psuedoConnections/psuedoPeople.js');
const house = require('../psuedoConnections/psuedoHouseholds.js');
const pantry = require('../psuedoConnections/psuedoPantries.js');

function matchPantry(name, address)
{
	var foundPantry = [];
	pantries.forEach((element) =>{
		if(element.Name === name || element.Address === address)
		{
			foundPantry.push(element);
		}
	})
	return foundPantry;
}

var pantryRoutes = function(app)
{
  console.log('pantry route setup');
  app.get('/API/pantries', function(req, res)
  {
    res.status(200).json(pantries)
  })
  app.post('/API/pantrySearch', function(req, res)
  {
    //Check for database connection
    var foundPantry = matchPantry(req.body.Name, req.body.Address)
    res.status(200).json(foundPantry)
  })
}

module.exports = {
  pantryRoutes
}
