angular.module('myApp.controllers.main')
    .controller('aboutUsCtrl',['$scope','$translate',
                       function($scope , $translate){
    	$scope.listObjectives = $translate.instant("Menu.AboutUsContent.Objectives.List");

    }]);