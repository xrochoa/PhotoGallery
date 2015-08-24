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
            code: ['pinn'], //update
            name: ['Pinnacles'], //update
            images: {
                pinn: [1, 2, 3, 4, 5, 6],
                josh: [] //update
            }
        };

        $scope.gallery = ['12', '4', '4', '4', '6', '6', '3', '3', '3', '3'];

        $scope.current = {
            code: '',
            name: '',
            photo: 1
        };

        $scope.goToGallery = function (code, name) {
            $scope.current.code = code;
            $scope.current.name = name;
            $scope.include('content/gallery.html');
        };

        $scope.goToPhoto = function (photo) {
            $scope.current.photo = photo + 1;
            $scope.include('content/full.html');
        };


    });
