const peeps = require('../psuedoConnections/psuedoPeople.js');
const house = require('../psuedoConnections/psuedoHouseholds.js');
const pantry = require('../psuedoConnections/psuedoPantries.js');

var pantryRoutes = function(app)
{
  console.log('pantry route setup');
  app.get('/API/pantries', function(req, res)
  {
    res.status(200).json(pantries)
  })

  app.post('/API/pantries/updateCap', function(req, res)
  {
    //Check for database connection
    var newCap = pantry.updateCap(req.body.revisedCapacity, req.body.name)
    res.status(200).json(newCap)
  })
	
	app.post('/API/pantries/getAvailable', function(req, res)
  {
    //Check for database connection
    var availablePantries = pantry.getAvailable(req.body.capacity)
    res.status(200).json(availablePantries)
  })
}

module.exports = {
  pantryRoutes
}
