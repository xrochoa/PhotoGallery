angular.module("myApp", ['ngRoute', 'ngAnimate'])
    .controller('myCtrl', ['$scope', '$routeParams', '$rootScope', function ($scope, $routeParams, $rootScope) {

        $scope.galleries = {
            nps: {
                name: 'National Parks',
                code: ['pinn', 'josh', 'gran', 'mesa', 'blac', 'arch', 'cany'],
                places: ['Pinnacles', 'Joshua Tree', 'Grand Canyon', 'Mesa Verde', 'Black Canyon of the Gunnison', 'Arches', 'Canyonlands'],
                suffix: 'National Park'
            },

            oip: {
                name: 'Other Inspiring Places',
                code: ['ante', 'hors', 'nava', 'monu', 'natu'], //update
                places: ['Antelope Canyon', 'Horseshoe', 'Navajo National Monument', 'Monument Valley Tribal Park', 'Natural Bridges National Monument'],
                suffix: ''
            }
        };

        $scope.images = {
            pinn: ['', '', '', '', '', ''],
            josh: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            gran: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ante: ['', '', '', '', '', ''],
            mesa: ['Point Lookout', 'Balcony House', 'Navajo Canyon View', 'Cliff Palace', 'Sun Point View', 'Long House'],
            blac: ['', '', '', '', '', ''],
            monu: ['', '', '', '', '', ''],
            arch: ['Delicate Arch', 'Three Gossips', 'The Organ', 'Sheep Rock', 'Tower of Babel', 'Balanced Rock', 'Garden of Eden', 'North and South Windows', 'Double Arch', 'Parade of Elephants', 'Sand Dune Arch', 'Park Ave', 'Landscape Arch', 'Wall near Navajo Arch', 'Double O Arch'],
            hors: ['Horseshoe Overlook'],
            cany: ['Monument Basin', 'Shafer Canyon Overlook', 'Mesa Arch', 'Aztec Butte Grainery', 'Whale Rock', 'Upheaval Dome', 'Green River Overlook', 'Soda Springs Basin', 'Grand View Point Overlook', 'Superbowl Campground', 'Big Spring Canyon Overlook', 'Big Spring Canyon Overlook', 'Pothole Point', 'Elephant Hill Trail', 'Devils Kitchen'],
            natu: ['Sipapu Bridge', 'Owachomo Bridge'],
            nava: ['Betatakin/Talastima Cliff Dwelling', 'Stormy Night']


        };

        $scope.gallery = ['12', '4', '4', '4', '6', '6', '3', '3', '3', '3', '4', '4', '4', '6', '6'];

        $scope.params = $routeParams;

        $scope.next = function () {
            if ($scope.params.photoId < $scope.images[$scope.params.codeId].length) {
                $scope.nextPhoto = (Number($scope.params.photoId) + 1).toString();
            } else {
                $scope.nextPhoto = 1;
            }
        };

    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'content/quote.html'
            })
            .when('/about', {
                templateUrl: 'content/about.html',
            })
            .when('/:galleryId', {
                templateUrl: 'content/gallery.html'
            })
            .when('/:galleryId/:codeId', {
                templateUrl: 'content/photos.html'
            })
            .when('/:galleryId/:codeId/:photoId', {
                templateUrl: 'content/full.html'
            })
            .otherwise({
                redirectTo: '/main'
            });
    }])
    .run(function ($rootScope, $location) {
        $rootScope.$watch(function () {
                return $location.path();
            },
            function (a) {
                if (a === '/main') {
                    $rootScope.myStyle = {
                        'background': 'url("img/arch/1.jpg") no-repeat center center fixed',
                        'background-size': 'cover'

                    };
                } else {
                    $rootScope.myStyle = {
                        'background': '#f5f9fa'
                    };
                }
                // show loading div, etc...
            });
    });
