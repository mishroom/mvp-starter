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

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;

