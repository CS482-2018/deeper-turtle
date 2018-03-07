const houses = require('./dummyHouseholds.js');
const peeps = require('./psuedoPeople.js');

//console.log(peeps.findPerson('Gertrude', 'Bates', '1988-08-10'));
//console.log(houses);


const psuedoHouse = {
  getPeople: (address) => {
    let code = 'No people at that address, check input';
    for (var i = 0; i < houses.length; i++) {
      if (houses[i].address == address) {
        code = houses[i].code;
        break;
      }
    }

    if (code == 'No people at that address, check input') {
      return code;
    }
    return peeps.getByHouse(code);
  },
  getCapacityAddress: (address) => {
    let cap = 'unknown';
    for (var i = 0; i < houses.length; i++) {
      if (houses[i].address == address) {
        cap = houses[i].numberOfPeople;
        break;
      }
    }
    return cap;
  },
  validCode: (inputCode) => {
    v = false;
    for (var i = 0; i < houses.length; i++) {
      if (houses[i].code == inputCode) {
        v = true;
        break;
      }
    }
    return v;
  },
};

//console.log(psuedoHouse.getPeople('829 Powell St, Kalamazoo, MI'));
//console.log(psuedoHouse.getCapacityAddress('829 Powell St, Kalamazoo, MI'));
module.exports = psuedoHouse;
