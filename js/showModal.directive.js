"use strict"; //http://www.w3schools.com/js/js_strict.asp

module.exports = function() {
    return {
        restrict: "A",
        scope: false,
        link: function(scope, elem, attrs) {
            //On click
            $(elem).click(function() {
                var imageModal = $('.image-modal');
                imageModal.modal();
            });
        }
    }
}

//HOW DIRECTIVE SCOPE WORKS

//scope: false = same as parent controller or rootscope
//scope: true = directive gets a new prototypically inherited scope
//scope: {} = directive gets an isolated scope in form of an object
//1. "@"   (  Text binding / one-way binding )..to initialize
//2. "="   ( Direct model binding / two-way binding )...like scope false
//3. "&"   ( Behaviour binding / Method binding  )..use parent methods with other names inside directive