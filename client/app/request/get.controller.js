(function () {
  'use strict';

  angular.module('bedSpaceManagement')
    .controller('RequestGetController', RequestGetController);

  function RequestGetController($scope, object) {
    $scope.object = object;
  }
})();
