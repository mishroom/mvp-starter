var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/storage');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var likedSchema = mongoose.Schema({
  id: Number, 
  title: String,
  image: String,
  likes: Number
});

var Recipe = mongoose.model('Recipe', likedSchema);

// var newInstance = new Recipe ({
//   quantity: 3,
//   description: "blubb"
// });

// newInstance.save();

var saveRecipe = function(recipe, callback) {
  var newRecipe = new Recipe(recipe);
  Recipe.save(newRecipe, function (err, data){
    if(err){
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

var selectAll = function(callback) {
  Recipe.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;

