console.log('clients has been sourced')
var myApp = angular.module('EmployeesApp', []);

myApp.controller('EmployeesController', ['$http', function(http){
    console.log('employees controller loaded.')
}]);