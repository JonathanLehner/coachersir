/**
 * Created by itay on 8/21/2015.
 */

angular.module('myApp.controllers')
    .controller('mainController',['$scope',function($scope) {
        'use strict';

        Dropzone.autoDiscover = false;

        $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
        $scope.filename = '';

        $scope.uploadFile = function() {
            $scope.processQueue();
        };

        $scope.reset = function() {
            $scope.resetDropzone();
        };

    }]);

