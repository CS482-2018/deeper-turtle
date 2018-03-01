var households =
[{
  "address":
  "code":
  "numberOfPeople":
},
{

},
{

},
{

}]

var householdRoutes = function(app)
{
  console.log('household route setup');
  app.get('/API/households', function(req, res)
  {
    res.status(200).json(households)
  }
)
}

module.exports = {
  householdRoutes
}
