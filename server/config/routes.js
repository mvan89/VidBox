var player = require('./../controllers/videos.js');
  module.exports = function(app) {
    app.post('/addvideo', function (req, res){
      console.log("route testing");
      player.addvideo(req, res);
    }),

    app.get('/addvideo', function (req,res){
      // console.log("index of video");
      player.index(req,res);
    }),

    app.delete('/video/:id', function(req,res){
      // console.log('delete in routes');
      player.destroy(req,res);
    })

  };
