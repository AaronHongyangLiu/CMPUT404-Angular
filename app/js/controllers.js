'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyExample', function($scope) {
      $scope.example = "Example";
      $scope.tuple = {first: "first", rest: "rest"};
  })
  .controller('Tuples', ['$scope',function($scope) {
      $scope.tuples = [{first: "first", rest:"some stuff"},
                       {first: "second", rest:"more stuff"},
                       {first: "third", rest:"more stuff"},
                       {first: "fourth", rest:"more stuff"},
                       {first: "fifth", rest:"more stuff"}];
      $scope.addTuple = function() {
          $scope.tuples.push({first:"new",rest:Math.random()});
      };
      

  }]);
