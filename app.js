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
            code: ['pinn', 'josh', 'gran', 'mesa'], //update
            name: ['Pinnacles', 'Joshua Tree', 'Grand Canyon', 'Mesa Verde'], //update
        };

        $scope.places = {
            code: ['ante'], //update
            name: ['Antelope Canyon'] //update
        };

        $scope.images = {
            pinn: [1, 2, 3, 4, 5, 6],
            josh: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            gran: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            ante: [1, 2, 3, 4, 5, 6],
            mesa: [1, 2, 3, 4, 5, 6]

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
