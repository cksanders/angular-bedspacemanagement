(function () {
  'use strict';

  angular.module('bedSpaceManagement')
    .run(function ($jsonapi, apiURL) {
      var schema = {
        type: 'centres',
        id: '',
        attributes: {
          name: {presence: true, length: {maximum: 40, minimum: 3}},
          maleCapacity: {presence: true},
          femaleCapacity: {presence: true},
          maleInUse: {presence: true},
          femaleInUse: {presence: true},
          maleOutOfCommission: {presence: true},
          femaleOutOfCommission: {presence: true}
        },
        relationships: {},
        functions: {
          toString: function () {
            if (!this.data.attributes.name) {
              return this.data.id;
            }

            return this.data.attributes.name;
          }
        }
      };

      var localeSynchro = $jsonapi.sourceLocal.create('LocalStore synchronization', 'AngularJsonAPI');
      var restSynchro = $jsonapi.sourceRest.create('Rest synchronization', apiURL + '/centres');
      var synchronizer = $jsonapi.synchronizerSimple.create([localeSynchro, restSynchro]);

      $jsonapi.addResource(schema, synchronizer);
    })
    .factory('Centres', Centres);

  function Centres($jsonapi) {
    return $jsonapi.getResource('centres');
  }
})();
