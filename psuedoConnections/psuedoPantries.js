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
}];

const psuedoPantries = {
  updateCap: (revisedCapacity, name) => {
    for (var i = 0;i < pantries.length; i++) {
      if (pantries[i].Name == name) {
        console.log('pantry is ', pantries[i]);
        pantries[i].Capacity = revisedCapacity;
        console.log(pantries[i]);
        break;
      }

    }
  }
};

module.exports = psuedoPantries;
module.exports = pantries;
