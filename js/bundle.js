(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var showModalDirective = require('./showModal.directive.js');
var routesConfig = require('./routes.config.js');
var hashChange = require('./hashChange.run.js');
var myCtrl = require('./myCtrl.controller.js');
var appData = require('./appData.service.js');

angular.module("myApp", ['ngRoute', 'ngAnimate'])
    .controller('myCtrl', myCtrl)
    .config(routesConfig)
    .run(hashChange)
    .directive("showModal", showModalDirective)
    .service("appData", appData);
},{"./appData.service.js":2,"./hashChange.run.js":3,"./myCtrl.controller.js":4,"./routes.config.js":5,"./showModal.directive.js":6}],2:[function(require,module,exports){
"use strict";

//for google analytics to send info per app page

module.exports = function() {

    this.galleries = function() {
        return {
            nps: {
                name: 'National Parks',
                code: [
                    ['arch', 'deat', 'yose'],
                    ['bryc', 'gran', 'josh'],
                    ['lass', 'redw', 'crat'],
                    ['cany', 'zion', 'capi'],
                    ['mesa', 'olym', 'rain'],
                    ['pinn', 'blac', 'sequ']
                ],
                suffix: 'National Park'
            },

            oip: {
                name: 'Other Inspiring Places',
                code: [
                    ['ante', 'hors', 'nava'],
                    ['monu', 'natu', 'pink'],
                    ['hoov', 'mexi', 'diam']
                ], //update
                suffix: ''
            }
        };
    }

    this.images = function() {
            return {
                pinn: ['Pinnacles', ['', '', '', '', '', '']],
                josh: ['Joshua Tree', ['Joshua Tree and Boulders', 'BLM Grounds', 'BLM Grounds', 'Park Boulevard', 'Joshua Tree and Boulders', 'Joshua Tree and Boulders', 'Hidden Valley Campground', 'Hidden Valley', 'Hidden Valley', 'Barker Dam Trail', 'Barker Dam Trail', 'Barker Dam Trail', 'Indian Cove', 'Petroglyphs', 'Cholla Cactus Garden']],
                gran: ['Grand Canyon', ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']],
                ante: ['Antelope Canyon Navajo Tribal Park', ['', '', '', '', '', '']],
                mesa: ['Mesa Verde', ['Point Lookout', 'Balcony House', 'Navajo Canyon View', 'Cliff Palace', 'Sun Point View', 'Long House']],
                blac: ['Black Canyon of the Gunnison', ['', '', '', '', '', '']],
                monu: ['Monument Valley Navajo Tribal Park', ['', '', '', '', '', '']],
                arch: ['Arches', ['Delicate Arch', 'Three Gossips', 'The Organ', 'Sheep Rock', 'Tower of Babel', 'Balanced Rock', 'Garden of Eden', 'North and South Windows', 'Double Arch', 'Parade of Elephants', 'Sand Dune Arch', 'Park Ave', 'Landscape Arch', 'Wall near Navajo Arch', 'Double O Arch']],
                hors: ['Horseshoe Bend', ['']],
                cany: ['Canyonlands', ['Monument Basin', 'Shafer Canyon Overlook', 'Mesa Arch', 'Aztec Butte Grainery', 'Whale Rock', 'Upheaval Dome', 'Green River Overlook', 'Soda Springs Basin', 'Grand View Point Overlook', 'Superbowl Campground', 'Big Spring Canyon Overlook', 'Big Spring Canyon Overlook', 'Pothole Point', 'Elephant Hill Trail', 'Devils Kitchen']],
                natu: ['Natural Bridges National Monument', ['Sipapu Bridge', 'Owachomo Bridge']],
                nava: ['Navajo National Monument', ['Betatakin/Talastima Cliff Dwelling', 'Stormy Night']],
                capi: ['Capitol Reef', ['Navajo Butte', 'Behunin Cabin', 'Capitol Dome', 'Petroglyphs', 'The Castle', 'Scenic Drive', 'Scenic Drive', 'Scenic Drive', 'Chimney Rock']],
                bryc: ['Bryce Canyon', ['Inspiration Point', 'Fairview Point', 'Natural Bridge', 'Ponderosa Canyon', 'Raven', 'The Whale', 'Near Inspiration Point', 'Near Sunrise Point', 'Navajo Trail', 'Navajo Trail', 'Navajo Trail', 'Navajo Trail', 'Queen Trail', 'Navajo Trail', 'Near Sunset Point']],
                pink: ['Coral Pink Sand Dunes State Park', ['', '', '', '', '', '']],
                zion: ['Zion', ['View from Angel\'s Landing', 'Checkerboard Mesa', 'Canyon Overlook', 'Watchman', 'Altar of Sacrifice', 'Virgin River', 'Court of the Patriarchs', 'Weeping Rock', 'Sunset at Weeping Rock', 'Upper Emerald Pool', 'Middle Emerald Pool', 'Great White Throne', 'The Narrows', 'The Narrows', 'Temple of Sinawava']],
                hoov: ['Hoover Dam', ['', '', '', '']],
                deat: ['Death Valley', ['Near Grapevine', 'Dante\'s View', 'Twenty Mule Team Canyon', 'Zabriskie Point', 'Zabriskie Point', 'Harmony Borax Works', 'Mesquite Flat Sand Dunes', 'Devil\'s Golf Course', 'Badwater Basin', 'Badwater Basin', 'Artist\'s Pallette', 'Golden Canyon', 'Golden Canyon', 'Salt Creek', 'Ubehebe Crater', 'Milky Way from Emigrant', 'Mesquite Flat Sand Dunes', 'Panamint']],
                sequ: ['Sequoia', ['View from Moro Rock', 'Milk Ranch Peak', 'Moro Rock', 'Castle Rocks', 'Smoky Sun', 'Sierra Nevada']],
                yose: ['Yosemite', ['Glacier Point', 'Tunnel View', 'El Capitan', 'Vernal Fall', 'Olmsted Point', 'Tenaya Lake', 'Lembert Dome', 'Cathedral Lake', 'Cathedral Peak']],
                lass: ['Lassen Volcanic', ['Bumpass Hell', 'Sulphur Works', 'Lassen Peak', 'Glacier Rock', 'Chaos Crags and Jumbles', 'Cinder Cone', 'Fantastic Lava Beds', 'Painted Dunes', 'Cinder Cone']],
                redw: ['Redwood', ['High Bluff Overlook', 'Lady Bird Johnson Grove', 'Lady Bird Johnson Grove', 'Redwood Creek Overlook', 'Fern Canyon', 'Gold Bluffs Beach', 'Roosevelt Elk', 'Big Tree Wayside', 'High Bluff Overlook']],
                crat: ['Crater Lake', ['Wizard Island', 'Mount Thielsen', 'Devil\'s Backbone', 'The Watchman', 'Clearest Water', 'Vidae Falls', 'Pinnacles Overlook', 'Phantom Ship', 'Mount Scott']],
                mexi: ['Mexican Hat', ['']],
                diam: ['Diamon Lake', ['']],
                rain: ['Mount Rainier', ['', '', '', '', '', '']],
                olym: ['Olympic', ['', '', '', '', '', '']]


            };
        }
        //responsive grid style for mobile
    this.gallery = function() {
        return ['12', '4', '4', '4', '6', '6', '4', '4', '4', '6', '6', '3', '3', '3', '3', '4', '4', '4'];
    }
}
},{}],3:[function(require,module,exports){
"use strict";

module.exports = ['$rootScope', '$location', function($rootScope, $location) {

    //checks for hash changes
    $rootScope.$watch(function() {
            return $location.path();
        },
        function(a) {

            //closes modal on change
            var imageModal = $('.image-modal');
            imageModal.modal('hide');

            //handles background cover for main page
            if (a === '/') {
                $rootScope.myStyle = {
                    'background': 'url("../img/highres/crat/1.jpg") no-repeat center center fixed',
                    'background-size': 'cover'

                };
            } else {
                $rootScope.myStyle = {
                    'background': '#f5f9fa'
                };
            }
        });
}];
},{}],4:[function(require,module,exports){
"use strict";

module.exports = ['$scope', '$routeParams', '$rootScope', '$location', '$window', 'appData', function($scope, $routeParams, $rootScope, $location, $window, appData) {

    //google analytics
    $scope.$on('$viewContentLoaded', function(event) {
        $window.ga('send', 'pageview', {
            page: $location.url()
        });
    });

    //INITIALIZE
    //url and hash params
    $scope.params = $routeParams;

    //image unique tracker
    $scope.imageindex = 1;

    //app data
    $scope.galleries = appData.galleries();
    $scope.images = appData.images();
    $scope.gallery = appData.gallery();



    $scope.updateimage = function(index) {
        $scope.imageindex = index;
        //$scope.imageindex = index;

    }
    

    //next picture on click (loop)
    $scope.next = function() {
        if ($scope.imageindex < $scope.images[$scope.params.codeId][1].length) {
            $scope.imageindex = $scope.imageindex + 1;
        } else {
            $scope.imageindex = 1;
        }
    };

}];
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict"; //http://www.w3schools.com/js/js_strict.asp

module.exports = function() {
    return {
        restrict: "A",
        scope: false,
        link: function(scope, elem, attrs) {
            //On click
            $(elem).click(function() {
                var imageModal = $('.image-modal');
                imageModal.modal();
            });
        }
    }
}

//HOW DIRECTIVE SCOPE WORKS

//scope: false = same as parent controller or rootscope
//scope: true = directive gets a new prototypically inherited scope
//scope: {} = directive gets an isolated scope in form of an object
//1. "@"   (  Text binding / one-way binding )..to initialize
//2. "="   ( Direct model binding / two-way binding )...like scope false
//3. "&"   ( Behaviour binding / Method binding  )..use parent methods with other names inside directive
},{}]},{},[1]);
