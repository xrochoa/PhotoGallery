angular.module("myApp", ['ngRoute', 'ngAnimate'])
    .controller("myController", function ($scope) {

        $scope.parks = {
            code: ['pinn', 'josh', 'gran', 'mesa', 'blac', 'arch'], //update
            name: ['Pinnacles', 'Joshua Tree', 'Grand Canyon', 'Mesa Verde', 'Black Canyon of the Gunnison', 'Arches'], //update
        };

        $scope.places = {
            code: ['ante', 'hors', 'monu'], //update
            name: ['Antelope Canyon', 'Horseshoe', 'Monument Valley Tribal Park'] //update
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
            hors: ['Horseshoe Overlook']


        };

        $scope.gallery = ['12', '4', '4', '4', '6', '6', '3', '3', '3', '3', '4', '4', '4', '6', '6'];

        $scope.current = {
            code: 'arch',
            name: 'Arches',
            suffix: 'National Park',
            photo: 1

        };

        $scope.whiteBackground = function () {
            $scope.myStyle = {
                'background': '#f5f9fa'
            };
        };

        $scope.updateGallery = function (code, name, suffix) {
            $scope.current.code = code;
            $scope.current.name = name;
            $scope.current.suffix = suffix;
            $scope.whiteBackground();
        };

        $scope.updatePhoto = function (photo) {
            $scope.current.photo = photo + 1;
        };

        $scope.next = function () {
            if ($scope.current.photo < $scope.images[$scope.current.code].length) {
                $scope.current.photo = $scope.current.photo + 1;
            } else {
                $scope.current.photo = 1;
            }
        };


    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'content/quote.html'
            })
            .when('/nps', {
                templateUrl: 'content/parks.html'
            })
            .when('/oip', {
                templateUrl: 'content/places.html'
            })
            .when('/gallery', {
                templateUrl: 'content/gallery.html'
            })
            .when('/full', {
                templateUrl: 'content/full.html'
            })
            .when('/about', {
                templateUrl: 'content/about.html'
            })
            .otherwise({
                redirectTo: '/main'
            });
    }]);
