angular.module("myApp", ['ngRoute', 'ngAnimate'])
    .controller('myCtrl', ['$scope', '$routeParams', '$rootScope', function ($scope, $routeParams, $rootScope) {

        $scope.galleries = {
            nps: {
                name: 'National Parks',
                code: [['pinn', 'josh', 'gran'], ['mesa', 'blac', 'arch'], ['cany', 'capi', 'bryc']],
                suffix: 'National Park'
            },

            oip: {
                name: 'Other Inspiring Places',
                code: [['ante', 'hors', 'nava'], ['monu', 'natu', 'pink']], //update
                suffix: ''
            }
        };

        $scope.images = {
            pinn: ['Pinnacles', ['', '', '', '', '', '']],
            josh: ['Joshua Tree', ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']],
            gran: ['Grand Canyon', ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']],
            ante: ['Antelope Canyon', ['', '', '', '', '', '']],
            mesa: ['Mesa Verde', ['Point Lookout', 'Balcony House', 'Navajo Canyon View', 'Cliff Palace', 'Sun Point View', 'Long House']],
            blac: ['Black Canyon of the Gunnison', ['', '', '', '', '', '']],
            monu: ['Monument Valley Tribal Park', ['', '', '', '', '', '']],
            arch: ['Arches', ['Delicate Arch', 'Three Gossips', 'The Organ', 'Sheep Rock', 'Tower of Babel', 'Balanced Rock', 'Garden of Eden', 'North and South Windows', 'Double Arch', 'Parade of Elephants', 'Sand Dune Arch', 'Park Ave', 'Landscape Arch', 'Wall near Navajo Arch', 'Double O Arch']],
            hors: ['Horseshoe', ['Horseshoe Overlook']],
            cany: ['Canyonlands', ['Monument Basin', 'Shafer Canyon Overlook', 'Mesa Arch', 'Aztec Butte Grainery', 'Whale Rock', 'Upheaval Dome', 'Green River Overlook', 'Soda Springs Basin', 'Grand View Point Overlook', 'Superbowl Campground', 'Big Spring Canyon Overlook', 'Big Spring Canyon Overlook', 'Pothole Point', 'Elephant Hill Trail', 'Devils Kitchen']],
            natu: ['Natural Bridges National Monument', ['Sipapu Bridge', 'Owachomo Bridge']],
            nava: ['Navajo National Monument', ['Betatakin/Talastima Cliff Dwelling', 'Stormy Night']],
            capi: ['Capitol Reef', ['Navajo Butte', 'Behunin Cabin', 'Capitol Dome', 'Petroglyphs', 'The Castle', 'Scenic Drive', 'Scenic Drive', 'Scenic Drive', 'Chimney Rock']],
            bryc: ['Bryce Canyon', ['Inspiration Point', 'Fairview Point', 'Natural Bridge', 'Ponderosa Canyon', 'Raven', 'The Whale', 'Near Inspiration Point', 'Near Sunrise Point', 'Navajo Trail', 'Navajo Trail', 'Navajo Trail', 'Navajo Trail', 'Queen Trail', 'Navajo Trail', 'Near Sunset Point']],
            pink: ['Coral Pink Sand Dunes State Park', ['', '', '', '', '', '']]


        };

        $scope.gallery = ['12', '4', '4', '4', '6', '6', '3', '3', '3', '3', '4', '4', '4', '6', '6'];

        $scope.params = $routeParams;

        $scope.next = function () {
            if ($scope.params.photoId < $scope.images[$scope.params.codeId][1].length) {
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
            });
    });
