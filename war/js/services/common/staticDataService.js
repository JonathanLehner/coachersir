angular.module('myApp.services')
    .factory('staticDataService',['$resource',function($resource) {
        'use strict';

        //var url_prefix = '_ah/api/staticDataEndpoint/v1';
        var url_prefix = 'api/staticDataEndpoint';

        var serv = {};

        serv.getLocations = function () {
            return $resource(url_prefix + '/allLocations').query().$promise;
        };

        serv.getObjectives = function () {
            return $resource(url_prefix + '/listObjectives').query().$promise;
        };

        serv.getDegrees = function () {
            return $resource(url_prefix + '/listDegrees').query().$promise;
        };


        return serv;
    }]);