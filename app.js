angular.module("myApp", ['ngRoute', 'ngAnimate'])
    .controller('myCtrl', ['$scope', '$routeParams', '$rootScope', function ($scope, $routeParams, $rootScope) {

        $scope.galleries = {
            nps: {
                name: 'National Parks',
                code: [['pinn', 'josh', 'gran'], ['mesa', 'blac', 'arch'], ['cany', 'capi', 'bryc'], ['zion', 'sequ', 'deat'], ['yose', 'lass']],
                suffix: 'National Park'
            },

            oip: {
                name: 'Other Inspiring Places',
                code: [['ante', 'hors', 'nava'], ['monu', 'natu', 'pink'], ['hoov']], //update
                suffix: ''
            }
        };

        $scope.images = {
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


        };

        $scope.gallery = ['12', '4', '4', '4', '6', '6', '4', '4', '4', '6', '6', '3', '3', '3', '3', '4', '4', '4'];

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
                        'background': 'url("img/yose/1.jpg") no-repeat center center fixed',
                        'background-size': 'cover'

                    };
                } else {
                    $rootScope.myStyle = {
                        'background': '#f5f9fa'
                    };
                }
            });
    });
