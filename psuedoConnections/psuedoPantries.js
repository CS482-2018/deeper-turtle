const pantries = require('./dummyPantries.js');

const psuedoPantries = {
  updateCap: (revisedCapacity, name) => {
    var p = false;
    for (var i = 0;i < pantries.length; i++) {
      if (pantries[i].Name == name) {
        //console.log('pantry is ', pantries[i]);
        pantries[i].Capacity = revisedCapacity;
        //console.log(pantries[i]);
        p = pantries[i].Capacity;
        break;
      }
    }

    return p;
  },
  getAvailable: (capacity) => {
    var o = [];
    for (var i = 0; i< pantries.length; i++) {
      if (neededCap <= pantries[i].Capacity) {
        o.push(A.Pantries[i]);
      }
    }
    return o;
  },
};
module.exports = psuedoPantries;
