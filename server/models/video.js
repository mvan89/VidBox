var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
  name: {}
});

mongoose.model('player', playerSchema);