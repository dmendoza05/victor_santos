(function() {
  'use strict';

  var app = angular.module('pt-directive', []);

  app.directive('navbar', [function() {
    return {
      restrict: 'E',
      scope: {
        'model': '='
      },
      templateUrl: "views/navbar.html",
      link: function(scope, elem, attr) {
      }
    }
  }]); // end navbar
})(); // end closure
