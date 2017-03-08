'use strict';

angular.
  module('establishmentLogin').
  component('establishmentLogin', {
    templateUrl: 'app/establishment-login/establishment-login.template.html',
    controller: ['$scope','Login','$location',
      function ($scope,Login,$location) {
        var self = this;
        $scope.Name="Krishna";
        $scope.Password="Kumar";
        $scope.authorise = function(){
        
            return Login.query({
              Name: $scope.Name,
              Password: $scope.Password
            }, function(res) {
                
                
                
                $scope.message = res.message;
              
                if(!res.error){
                  $location.path("/establishments");
                }
                
            }); 

        }
      }
    ]
  });
