var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo/index');
// const RapidAPI = new require('rapidapi-connect');
// const rapid = new RapidAPI('refridgerraider_5a4e8c2fe4b038fa76c0cb61', 'a31eb21a-d1de-4cac-9150-9dc378c92bb9');
var unirest = require('unirest');
// var sampleData = require('../database-mongo/sample_data')

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/storage', function (req, res) {

  // console.log("RECIPE RECEIVED BY SERVER");

  req.on('data', function(data){
    var dataObj = JSON.parse(data.toString());
    if(dataObj.type === "delete") {

      items.deleteRecipe(dataObj.recipe);
      res.end();

    } else if (dataObj.type === 'save'){

      items.saveRecipe(dataObj.recipe);
      res.end();

    } else if (dataObj.type === 'search') {

      var query = dataObj.query;
      query = query.split(',').join('%2C');
            //connect to API 
            // unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${query}&limitLicense=false&number=5&ranking=1`)
            // .header("X-Mashape-Key", "y8p0We0kS8mshZXRWGLWEQWduPRZp115RAsjsn4XvamU1HNo8g")
            // .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
            // .end(function (result) {
            //   console.log(result.body);
            //     res.end(JSON.stringify(result.body));
            //   });
            res.end(JSON.stringify(sampleData));
          }

       
      })

});

var sendResults = function (results) {
  res.send(results);
}


app.get('/storage', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


var sampleData = [
{
  "id":556470,
  "title":"Apple fritters",
  "image":"https://spoonacular.com/recipeImages/Apple-fritters-556470.jpg",
  "imageType":"jpg",
  "usedIngredientCount":3,
  "missedIngredientCount":0,
  "likes":243
},
{
  "id":47950,
  "title":"Cinnamon Apple Crisp",
  "image":"https://spoonacular.com/recipeImages/cinnamon_apple_crisp-47950.jpg",
  "imageType":"jpg",
  "usedIngredientCount":3,
  "missedIngredientCount":0,
  "likes":35
},
{
  "id":534573,
  "title":"Brown Butter Apple Crumble",
  "image":"https://spoonacular.com/recipeImages/Brown-Butter-Apple-Crumble-534573.jpg",
  "imageType":"jpg",
  "usedIngredientCount":3,
  "missedIngredientCount":0,
  "likes":7
},
{
  "id":47732,
  "title":"Apple Tart",
  "image":"https://spoonacular.com/recipeImages/apple_tart-47732.jpg",
  "imageType":"jpg",
  "usedIngredientCount":3,
  "missedIngredientCount":0,
  "likes":0
},
{
  "id":47891,
  "title":"Apple Tart",
  "image":"https://spoonacular.com/recipeImages/apple_tart-47891.jpg",
  "imageType":"jpg",
  "usedIngredientCount":3,
  "missedIngredientCount":0,
  "likes":0
}
]

