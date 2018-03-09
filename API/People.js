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

	app.post('/API/people/isPersonPart', function(req, res)
	{
		var partPerson = peeps.isPersonPart(req.body.code, req.body.fName, req.body.lName, req.body.dob)
		res.status(200).json(partPerson)
	})

	app.post('/API/people/isHead', function(req, res)
	{
		var headPerson = peeps.isHead(req.body.firstName, req.body.lastName, req.body.birthday)
		res.status(200).json(headPerson)
	})

	app.post('/API/people/getByHouse', function(req, res)
	{
		var peopleHouse = peeps.getByHouse(req.body.houseCode)
		res.status(200).json(peopleHouse)
	})

  app.post('/API/people/schedulePerson', function(req, res)
	{
    // is this person linked to this house code?
		var personPart = peeps.isPersonPart(req.body.code, req.body.fname, req.body.lname, req.body.dob);
    var validHead = peeps.isHead(req.body.fname, req.body.lname, req.body.dob); // are they head of household?
    // if both conditions met exists is true
    var exists = personPart && (validHead != 'person not in system' && validHead != false);

    // default values
    var address = "";
    var availablePantries = [];

    if(exists){ // is this a valid person?
      address = house.getAddressCode(req.body.code); // get their address
      var houseCapacity = house.getCapacityCode(req.body.code); // get the capacity of their house
      availablePantries = pantry.getAvailable(houseCapacity); // get list of available pantries
    }

    // create an object to send back
    scheduledPerson = {
      fname : req.body.fname,
      lname : req.body.lname,
      dob : req.body.dob,
      address : address,
      validHeadOfHouse : exists,
      availablePantries : availablePantries,
    }

    res.status(200).json(scheduledPerson)
	})

}

module.exports = {
  peopleRoutes
}
