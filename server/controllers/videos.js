var mongoose = require('mongoose');
var Player = mongoose.model("player");
module.exports = (function() {
  return {
    addvideo: function(req, res){
        console.log(req.body);
        var new_video = new Player({name: req.body});
        new_video.save(function(err, add){
            if(err){
                console.log("did not save")
            } else{
                res.json(add);
            }
        })
    },

    index: function(req, res){
        Player.find({}, function(err, results){
            if(err){
                console.log("error finding video");
            } else{
                res.json(results)
            }
        })
    },

    destroy: function(req, res){
        Player.remove({_id: req.params.id}, function (err, data){
            if (err){
                console.log('error deleting video');
            } else {
                res.json(data);
            }
        })
    },


  }
})();