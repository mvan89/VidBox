myApp.controller('youtubeController', function ($scope, youtubeFactory){
    $scope.video = [];
    $scope.list = [];

    $scope.addVideo = function(data, callback){
        // console.log(data);
        youtubeFactory.addVideo(data, function(data){
            console.log(data);
            $scope.list = data;
        })
    };  

    $scope.search = function (data){   
        youtubeFactory.search($scope.newvideo, function (data){
            // console.log(data.items[0].id.videoId);
            $scope.video = data.items;
            // console.log (data);
           
        })
    };

    youtubeFactory.index(function (data){
        $scope.list = data;
        // console.log($scope.list);
    });

    $scope.deleteVideo = function(x){
        // console.log(x);
        youtubeFactory.deleteVideo(x, function (data){
            $scope.list = data;
        })
    };
    $scope.playSong = function(x){
        console.log(x);
        $scope.vid = x.name.id.videoId;
    }


})