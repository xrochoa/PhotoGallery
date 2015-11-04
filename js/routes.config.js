"use strict";

module.exports = ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/quote.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
        })
        .when('/:galleryId', {
            templateUrl: 'views/gallery.html'
        })
        .when('/:galleryId/:codeId', {
            templateUrl: 'views/photos.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);

}];