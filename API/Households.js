var households =
[{
  "address":"768 Lovell St, Kalamazoo, MI",
  "code":"1234",
  "numberOfPeople":4
},
{
  "address":"567 Bing Dr, Mattawan, MI",
  "code":"2345",
  "numberOfPeople":2
},
{
  "address":"439 Spring St, Portage, MI",
  "code":"3456",
  "numberOfPeople":4
},
{
  "address":"829 Powell St, Kalamazoo, MI",
  "code":"4567",
  "numberOfPeople":6
},
{
  "address":"6302 Darling Rd, Kalamazoo, MI",
  "code":"5678",
  "numberOfPeople":2
},
{
  "address":"278 Plastic St, Kalamazoo, MI",
  "code":"6789",
  "numberOfPeople":6
},
{
  "address":"587 King Ct, Kalamazoo, MI",
  "code":"7890",
  "numberOfPeople":4
},
{
  "address":"198 Gold St, Kalamazoo, MI",
  "code":"8901",
  "numberOfPeople":6
},
{
  "address":"555 Lake St, Kalamazoo, MI",
  "code":"9012",
  "numberOfPeople":2
},
{
  "address":"3752 Oak St, Kalamazoo, MI",
  "code":"0123",
  "numberOfPeople":6
}]

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
}

module.exports = {
  householdRoutes
}
