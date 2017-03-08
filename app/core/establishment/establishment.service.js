'use strict';

angular.
  module('core.establishment').
  factory('Establishment', ['$resource',
    function($resource) {
      return $resource('establishment/:id', {}, {
        query: {
          method: 'GET',
          params: {EstablishmentId: 'establishment'},
          isArray: false
        }
      });
    }
  ]).
  factory('List', ['$resource',
    function($resource) {
        return $resource(_SERVER_BASE_URL+'/list', {  
      }, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]).
  factory('Login', ['$resource',
    function($resource) {
      return $resource(_SERVER_BASE_URL+'/login', {
         
      }, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]).
  factory('Add', ['$resource',
    function($resource) {
      return $resource(_SERVER_BASE_URL+'/new', {
         
      }, {
        query: {
          method: 'POST',
          params: {},
          isArray: false
        }
      });
    }
  ]);
