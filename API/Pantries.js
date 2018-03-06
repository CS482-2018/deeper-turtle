var pantries =
[{
  "Name":"St. Helens",
  "Capacity":1,
  "Hours": "12-2PM",
  "Address":"123 Helping Hand, Kalamazoo, MI"
},
{
  "Name":"First Baptist",
  "Capacity":0,
  "Hours":"9-12 PM",
  "Address":"278 Pool Dr, Mattawan, MI"
},
{
  "Name":"HQ",
  "Capacity":7,
  "Hours": "9-5 PM",
  "Address":"1 Main Street, Kalamazoo, MI"
},
{
  "Name":"Bells",
  "Capacity":7,
  "Hours": "1-3 PM",
  "Address": "1200 W. Michigan Avenue, Kalamazoo, MI"
},
{
  "Name":"The Union",
  "Capacity":11,
  "Hours": "1-4 PM",
  "Address": "156 Stadium Dr., Kalamazoo, MI"
},
{
  "Name":"Old Dog",
  "Capacity":15,
  "Hours": "8-11 AM",
  "Address": "278 W. Lovell St., Kalamazoo, MI"
},
{
  "Name":"SweetWaters",
  "Capacity":3,
  "Hours": "11-3 PM",
  "Address": "364 Stanwood St., Kalamazoo, MI"
},
{
  "Name":"Food Dance",
  "Capacity":-1,
  "Hours": "1-5 PM",
  "Address": "555 Stone Dr., Kalamazoo, MI"
},
{
  "Name":"Bottoms Up",
  "Capacity":100,
  "Hours": "8-5 PM",
  "Address": "456 Academy St., Kalamazoo, MI"
},
{
  "Name":"HopCat",
  "Capacity":2,
  "Hours": "7-9 AM",
  "Address": "362 Eldred St., Kalamazoo, MI"
}]

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
