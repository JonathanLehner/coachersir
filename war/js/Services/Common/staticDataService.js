angular.module('myApp.services')
    .factory('staticDataService',['$resource',function($resource) {
        'use strict';
        var serv = {};

        serv.getLocations = function () {
            return $resource('_ah/api/staticDataEndpoint/v1/allLocations').get().$promise;
        };

        serv.getObjectives = function () {
            return $resource('_ah/api/staticDataEndpoint/v1/allObjectives').get().$promise;
        };

        serv.getDegrees = function () {
            return $resource('_ah/api/staticDataEndpoint/v1/allDegrees').get().$promise;
        };


        return serv;
    }]);