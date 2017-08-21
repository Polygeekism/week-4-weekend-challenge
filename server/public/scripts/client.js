console.log('clients has been sourced')
var myApp = angular.module('EmployeesApp', []);

myApp.controller('EmployeesController', ['$http', function ($http) {
    console.log('employees controller loaded.')
    var self = this;
    self.employees = [];
    self.salaries = 0;
    self.newEmployee = {};
    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: 'employees'
        }).then(function (response) {
            console.log(response);
            self.employees = response.data;
            self.getSalaries();
        })
    }
    self.getSalaries = function () {
        $http({
            method: 'GET',
            url: 'employees/salaries'
        }).then(function (response) {
            console.log(response.data[0].sum);
            self.salaries = ((response.data[0].sum) / 12).toFixed(2);

        })
    }
    self.postNewEmployee = function () {
        $http({
            method: 'POST',
            url: 'employees',
            data: self.newEmployee
        }).then(function (response) {
            console.log(response);
            self.getEmployees();
            self.newEmployee = {};
        })
    }
    // self.removeEmployee = function (id) {
    //     console.log(id);
    //     $http({
    //         method: 'DELETE',
    //         url: 'employees/' + id
    //     }).then(function (response) {
    //         self.getEmployees();
    //     })
    // }
    self.whatClassIsIt = function (active){
        if(active===true){
            return 'true';
        }else{
            return 'false';
        }
        
    }
    self.activeEmployee = function (id, active) {
        console.log(id, active);

        if (active === true) {
            active = false;
        } else {
            active = true;
        }
        var activeChange = {
            id: id,
            active: active
        };
        $http({
            method: 'PUT',
            url: 'employees/',
            data: activeChange
        }).then(function (response) {
                self.getEmployees();
            })
    }


    self.getEmployees();
}]);