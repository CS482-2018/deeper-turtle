var nano = require('nano')('http://localhost:8080')
var people = require('./People')
var households = require('./Households')
var pantries = require('./Pantries')


var setup = function(app)
{
  people.peopleRoutes(app);
  households.householdRoutes(app);
  pantries.pantryRoutes(app);
  //console.log(setup)
}

module.exports = {
  setup:setup
}
