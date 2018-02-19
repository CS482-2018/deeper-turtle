//a file made to schedule a food pantry

//OUTLINE

//dummy pantries
A = {
"Pantries":[
    {"Name":"St. Helens", "Capacity":1, "Hours": "12-2PM", "Address":"123 Helping Hand, Kalamazoo, MI"},
    {"Name":"First Baptist", "Capacity":0, "Hours":"9-12PM", "Address":"278 Pool Dr, Mattawan, MI"},
    {"Name":"HQ", "Capacity":7, "Hours": "9-5 PM", "Address":"1 Main Street, Kalamazoo, MI"},
    {"Name":"Bells", "Capacity":7, "Hours": "1-3 PM", "Address": "1200 W. Michigan Avenue, Kalamazoo, MI"}
]
};


//should pull in the pantries from the DB with their information like capacity, address, and hours, Kennan waiting on you
 function _getPantries() {

 }
// should see which have openings
//needs the react component built out to pass in
function _haveCapacity(neededCap) {
  console.log(A.Pantries.length);
  options = [];
  for (i = 0; i< A.Pantries.length; i++) {
    console.log(A.Pantries[i]);
    if (neededCap <= A.Pantries[i].Capacity) {
      console.log('found one');
      options.push(A.Pantries[i]);
    }
  }

  console.log(options);
  return options;
}



_haveCapacity(3);
