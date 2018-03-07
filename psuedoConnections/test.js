const peeps = require('./psuedoPeople.js');

console.log('Tests starting');
console.log('Testing people fx');
console.log('finding a person test')
console.log(peeps.findPerson('Gertrude','Bates','1988-08-10'));
console.log('finding a people attached to a house code', peeps.getByHouse('0123'));
console.log('Testing head function positive');

if (peeps.isHead('Bobsponge','Squaresuit','1988-05-21')) {
  console.log('check');
} else {console.log('failed');}

console.log('Testing head function negative');
if (peeps.isHead('Gertrude','Bates','1988-08-10')) {
  console.log('error in head function');
} else {console.log('check');}
console.log('Testing head function nonsense');
