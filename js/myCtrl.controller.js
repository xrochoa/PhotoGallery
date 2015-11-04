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