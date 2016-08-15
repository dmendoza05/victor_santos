(function() {
  'use strict';

  var app = angular.module('navbar-directive', []);

  app.directive('navbar', [function() {
    return {
      restrict: 'E',
      templateUrl: "views/navbar.html"
    }
  }]); // end navbar

  app.directive('navbarTabs', [function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var tab = document.getElementsByClassName('active');

        element.bind("click", function() {
          if(tab[0]){
            tab[0].removeAttribute('class'); 
          };
          element.addClass('active');
        });
      }
    }
  }]);
})(); // end closure
