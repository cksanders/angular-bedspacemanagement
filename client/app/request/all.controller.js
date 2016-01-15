(function () {
  'use strict';

  angular.module('bedSpaceManagement')
    .controller('RequestAllController', RequestAllController);

  function RequestAllController($scope, collection) {
    $scope.collection = collection;
  }
})();
