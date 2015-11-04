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