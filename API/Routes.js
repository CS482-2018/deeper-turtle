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
if (process.env.USE_DB != true)
{
  //Send Temp Data
}
module.exports = {
  setup:setup
}
