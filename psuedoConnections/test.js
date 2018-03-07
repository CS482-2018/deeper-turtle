const peeps = require('./psuedoPeople.js');
const house = require('./psuedoHouseholds.js');

console.log('Tests starting');


//test regarding functions within the pantries category
console.log('Testing people fx');
console.log('finding a person postive test');
if (peeps.findPerson('Gertrude', 'Bates', '1988-08-10') == 'no person found') {console.log('failed');
} else {console.log('check');}
console.log('finding a person negative test');
if (peeps.findPerson('Ge', 'Bates', '1988-08-10') == 'no person found') {console.log('check');
}else {console.log('failed');}

console.log('finding a people attached to a house code');
let temp = peeps.getByHouse('0123');
if (temp.length == 6) {console.log('check');} else {console.log('failed');}
console.log('Testing head function positive');

if (peeps.isHead('Bobsponge', 'Squaresuit', '1988-05-21')) {
  console.log('check');
} else {console.log('failed');}

console.log('Testing head function negative');
if (peeps.isHead('Gertrude', 'Bates', '1988-08-10')) {
  console.log('failed');
} else {console.log('check');}
console.log('Testing head function nonsense');
if (peeps.isHead('Gjk', 'Bates', '1988-08-10') == 'person not in system') {
  console.log('check');
} else console.log('failed');
console.log('testing validity function positive');
if (peeps.isValid('Gertrude', 'Bates', '1988-08-10')) {
  console.log('check');
} else {console.log('failed');}
console.log('testing validity function negative');
if (peeps.isValid('Gjk', 'Bates', '1988-08-10')) {
  console.log('failed');
} else {console.log('check');}

//tests within the dummyHouseholds
console.log('Testing household fx');

console.log('Testing get people positive');
temp = house.getPeople('829 Powell St, Kalamazoo, MI');
if (temp == 'No people at that address, check input') {
  console.log('failed');
} else {console.log('check');}

console.log('Testing get people negative');
temp = house.getPeople('829fjsdhgkl Powell St, Kalamazoo, MI');
if (temp == 'No people at that address, check input') {
  console.log('check');
} else {console.log('failed');}

console.log('Testing out capacity get, positive');
temp = house.getCapacityAddress('829 Powell St, Kalamazoo, MI');
if (temp ==6) { console.log('check');} else console.log('failed');

console.log('Testing out capacity get, negative/nonsense');

temp = house.getCapacityAddress('829jdhlgnfkm; Powell St, Kalamazoo, MI');
if (temp == 'unknown') {console.log('check');} else {console.log('failed');}
