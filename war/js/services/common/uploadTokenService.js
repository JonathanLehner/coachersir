angular.module('myApp.services')
    .factory('uploadTokenService',['$resource',function($resource) {
        'use strict';

        var url_prefix = 'api/contentEndpoint';

        var serv = {};

        serv.getUploadToken = function (type) {
            return $resource(url_prefix + '/getUploadToken?type=' + type).get().$promise;
        };

        return serv;
    }]);