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

  app.post('/API/pantries/schedulePantryVisit', function(req, res)
  {
    /* this is placeholder functionality!
        TODO have this data added to database to keep track of who is scheduled
        to visit a pantry
    */
    pantrySchedulingData = {
      houseCode: req.body.houseCode,
      pantry : req.body.pantry,

    }
    res.status(200).json(pantrySchedulingData)
  })

  app.post('/API/pantries/cancelPantryVisit', function(req, res)
  {
    /* this is placeholder functionality!
        TODO indicate in database that this house cancled today's pantry
        visit and remove them from the schedule
    */
    res.status(200).json(req.body.houseCode)
  })
}

module.exports = {
  pantryRoutes
}
