const peeps = require('../psuedoConnections/psuedoPeople.js');
const house = require('../psuedoConnections/psuedoHouseholds.js');
const pantry = require('../psuedoConnections/psuedoPantries.js');

var householdRoutes = function(app)
{
  console.log('household route setup');
  app.get('/API/households', function(req, res)
  {
    res.status(200).json(households)
  })

  app.post('/API/households/getAddressCode', function(req, res)
  {
    //Check for database connection
    var houseAddress = house.getAddressCode(req.body.inputCode)
    res.status(200).json(houseAddress)
  })

	app.post('/API/households/getPeople', function(req, res)
  {
    //Check for database connection
    var peopleAtAddress = house.getPeople(req.body.address)
    res.status(200).json(peopleAtAddress)
  })

	app.post('/API/households/getCapacityAddress', function(req, res)
  {
    //Check for database connection
    var capacityAddress = house.getCapacityAddress(req.body.address)
    res.status(200).json(capacityAddress)
  })

	app.post('/API/households/getCapacityCode', function(req, res)
  {
    //Check for database connection
    var capacityCode = house.getCapacityCode(req.body.code)
    res.status(200).json(capacityCode)
  })

	app.post('/API/households/validCode', function(req, res)
  {
    //Check for database connection
    var isValid = house.validCode(req.body.inputCode)
    res.status(200).json(isValid)
  })
}

module.exports = {
  householdRoutes
}
