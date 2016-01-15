(function () {
  'use strict';

  angular.module('bedSpaceManagement')
    .controller('FrameController', frameController);

  function frameController($jsonapi,
                           $scope) {
    $scope.names = $jsonapi.listResources();

    $scope.localStoreSize = $jsonapi.sourceLocal.size;
  }
})();
