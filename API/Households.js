var households =
[{

}]

var householdRoutes = function(app)
{
  console.log('people route setup');
  app.get('/API/households', function(req, res)
  {
    res.status(200).json(households)
  }
)
}

module.exports = {
  householdRoutes
}
