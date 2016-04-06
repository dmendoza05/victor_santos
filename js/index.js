(function() {
  'use strict';

  var app = angular.module('pt_website', ['ui.router', 'pt_controllers', 'pt-directive']);

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state("initial", {
        url: "/",
        templateUrl: "views/initial.html"
      })
      .state("home", {
        url: "/home",
        templateUrl: "views/home.html"
      })
      .state("about", {
        url: "/about",
        templateUrl: "views/about.html"
      })
      .state("services", {
        url: "/services",
        templateUrl: "views/services.html"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "views/contact.html"
      });

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode(true);
  }); // end config
})(); // end closure
