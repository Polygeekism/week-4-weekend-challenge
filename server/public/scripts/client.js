console.log('clients has been sourced')
var myApp = angular.module('EmployeesApp', []);

myApp.controller('EmployeesController', ['$http', function($http){
    console.log('employees controller loaded.')
    var self = this;
    self.employees = [];
    self.salaries = 0;
    self.newEmployee = {};
    self.getEmployees = function(){
        $http({
            method:'GET',
            url: 'employees'
        }).then( function(response){
            console.log(response);
            self.employees = response.data;
            self.getSalaries();
        })
    }
    self.getSalaries = function(){
        $http({
            method:'GET',
            url: 'employees/salaries'
        }).then( function(response){
            console.log(response.data[0].sum);
            self.salaries = ((response.data[0].sum)/12).toFixed(2);

        })
    }
    self.postNewEmployee = function (){
        $http({
            method: 'POST',
            url: 'employees',
            data: self.newEmployee
        }).then(function(response){
            console.log(response);
            self.getEmployees();
            self.newEmployee = {};
        })
    }
    

    self.getEmployees();
}]);