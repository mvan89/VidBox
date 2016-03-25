var myApp = angular.module('myApp', ['ngRoute','youtube-embed']);
    myApp.config(function ($routeProvider, $locationProvider){
        $routeProvider
        .when('/' , {
            templateUrl: 'static/javascripts/partials/youtube.html'
        })
        .otherwise({
            redirectTo: '/'
        }); 
        
    });