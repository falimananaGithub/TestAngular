/* chapter1/app.js excerpt */
/* chapter1/app.js excerpt */
'use strict';
/* App Module */

var demoApp = angular.module('myApp',['ngRoute','myAppController','ngResource']);
demoApp.config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider){
        $routeProvider
            .when('/', 
                {
                    
                    templateUrl: 'partials/home.html', 
                    controller: 'CtrlHome'
                }
                )
            .when('/list',
                {
                
                templateUrl: 'partials/lists.html',
                controller: 'CtrlList'
                }
                )
            .when('/add',
                {
                templateUrl:'partials/add.html',
                controller:'CtrlAdd'
                })
            .when('/edit/:id',
                    {
                    templateUrl:'partials/edit.html',
                    controller:'CtrlEdit'
                    }
                )
            .otherwise({redirectTo:'/'})
            
        }
    ]);
demoApp.controller('navbarCtrl',['$scope','$location',function($scope,$location){
    $scope.getPath=function(res){
        switch (res) {
            case 'home':
                $scope.activeHome='active';
                $scope.activeAdd='';
                $scope.activeList='';
                break;
            case 'add':
                $scope.activeHome='';
                $scope.activeAdd='active';
                $scope.activeList='';
                break;
            default:
                $scope.activeHome='';
                $scope.activeAdd='';
                $scope.activeList='active';
                break;
        }
    }
    
}]);

       

       



