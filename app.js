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
            code: ['pinn', 'josh', 'gran'], //update
            name: ['Pinnacles', 'Joshua Tree', 'Grand Canyon'], //update
            images: {
                pinn: [1, 2, 3, 4, 5, 6],
                josh: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                gran: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            }
        };

        $scope.places = {
            code: ['ante'], //update
            name: ['Antelope Canyon'], //update
            images: {
                ante: [1]
            }
        };

        $scope.gallery = ['12', '4', '4', '4', '6', '6', '3', '3', '3', '3', '4', '4', '4', '6', '6'];

        $scope.current = {
            code: '',
            name: '',
            suffix:'',
            photo: 1
        };

        $scope.goToGallery = function (code, name, suffix) {
            $scope.current.code = code;
            $scope.current.name = name;
            $scope.current.suffix = suffix;
            $scope.include('content/gallery.html');
        };

        $scope.goToPhoto = function (photo) {
            $scope.current.photo = photo + 1;
            $scope.include('content/full.html');
        };


    });
