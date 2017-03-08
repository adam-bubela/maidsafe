'use strict';

angular.module('establishmentList').
  component('establishmentList', {
    templateUrl: 'app/establishment-list/establishment-list.template.html',
    controller: ['$scope','List','Add',function($scope,List,Add) {

             List.query({},function(res){
                  $scope.authorizedUser = !res.error;
                  $scope.establishments = res.res||{}
                  console.log('$scope.authorizedUser',$scope.authorizedUser);
            }); 
            
            $scope.addTask = function(){
                Add.query({name:$scope.taskName},function(res){
                  $scope.establishments.push({
                    name: $scope.taskName, 
                    $loki:res.$loki});
                });
            }
            $scope.updateTask = function(){
                //TODO
            }
            $scope.deleteTask = function(){
                //TODO
            }
      }
    ]
   
});
  
  