angular.module("myApp", [])
    .controller("myController", function ($scope) {
        $scope.templateUrl = 'content/quote.html';

        $scope.include = function (url) {
            $scope.templateUrl = url;
            $scope.myStyle = {
                'background': '#f5f9fa'
            };

        };

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
            code: '',
            name: '',
            suffix: '',
            link: '',
            photo: ''

        };

        $scope.goToGallery = function (code, name, suffix, link) {
            $scope.current.code = code;
            $scope.current.name = name;
            $scope.current.suffix = suffix;
            $scope.current.link = link;
            $scope.include('content/gallery.html');
        };

        $scope.goToPhoto = function (photo) {
            $scope.current.photo = photo + 1;
            $scope.include('content/full.html');
        };


    });
