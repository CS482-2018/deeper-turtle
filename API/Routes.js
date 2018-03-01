var nano = require('nano')('http://localhost:8080')
var people = require('./People')
var setup = function(app)

{
  people.peopleRoutes(app);
  //console.log(setup)
}

module.exports = {
  setup:setup
}
