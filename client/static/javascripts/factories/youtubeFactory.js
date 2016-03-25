myApp.factory("youtubeFactory", function ($http){
    var video = [];
    var factory = {};
    var list = [];
    factory.search = function(data, callback){ 
        $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: 'AIzaSyBXWnr3vB3fjorCt7ToH-cx-QrSBrBDCjM',
                type: 'video',
                maxResults: '10',
                part: 'id,snippet',
                fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
                q: data
            }
        })
        .success( function (data) {
            video = data;
            callback(video);
            // console.log(video);
        })
        .error( function () {
            console.log('Search error');
          });
    } 

    factory.addVideo = function(data, callback){
        // console.log(data);
        $http.post('/addvideo', data).success(function(x){
            list.push(x);
            callback(list);
        })
    }

    factory.index = function(callback){
        $http.get('/addvideo').success(function(data){
            list = data;
            callback(list);
        })
    };

    factory.deleteVideo = function (x, callback){
        // console.log(x, "factory delete");
        $http.delete('/video/'+ x._id).success(function(data){
            var index = list.indexOf(x);
            list.splice(index, 1);
            callback(list);
        })
    }

    return factory;
});
        