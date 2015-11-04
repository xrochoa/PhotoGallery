"use strict";

var showModalDirective = require('./showModal.directive.js');
var routesConfig = require('./routes.config.js');
var hashChange = require('./hashChange.run.js');
var myCtrl = require('./myCtrl.controller.js');
var appData = require('./appData.service.js');

angular.module("myApp", ['ngRoute', 'ngAnimate'])
    .controller('myCtrl', myCtrl)
    .config(routesConfig)
    .run(hashChange)
    .directive("showModal", showModalDirective)
    .service("appData", appData);