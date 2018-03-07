const people = require('./dummyPeople.js');

const psuedoPeople = {
  //method that finds a person given fname, lname, and dob
  findPerson: (firstName, lastName, birthday) => {
    //console.log('successfully within psudeo find person');
    for (var i = 0; i < people.length; i ++ ) {
      //console.log(people[i]);
      //if birthday matches check names
      //console.log('within loop', i);
      if (birthday == people[i].dob && firstName == people[i].fname && lastName == people[i].lname) {
        //console.log('found the match');
        return people[i];
      }
    }
    return 'no person found';
  },

  //method that checks if a person is head of house
  isHead: (firstName, lastName, birthday) => {
    //find the individual
    p = psuedoPeople.findPerson(firstName, lastName, birthday);
    if (p == 'no person found') {
      return 'person not in system';
    } else {
      return p.ishead;
    }
  },

  //method to detect whether a person is valid
  isValid: (firstName, lastName, birthday) => {
    p = psuedoPeople.findPerson(firstName, lastName, birthday);
    if (p == 'no person found') {
      return false;
    } else {
      return true;
    }
  },

  //method that returns all people that have the same household codes
  getByHouse: (houseCode) => {
    var peeps = [];
    for (var i = 0; i < people.length; i ++ ) {
      if (people[i].code == houseCode) {
        peeps.push(people[i]);
      }
    }

    return peeps;
  },

};

//console.log(psuedoPeople.findPerson('Gertrude','Bates','1988-08-10'));
//console.log(psuedoPeople.getByHouse('0123'));
//functions to search and find people
module.exports = psuedoPeople
//place holder data
