angular.module('myApp.services')
    .factory('coachersDataService',['$resource',function($resource){
        'use strict';
        var serv = {};

        serv.getLocations = function(){
            return $resource('_ah/api/locationsEndpoint/v1/all').get().$promise;
        };

        return serv;
    }]);