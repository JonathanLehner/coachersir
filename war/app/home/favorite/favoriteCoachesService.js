/**
 * Created by itay on 3/7/2016.
 */
angular.module('myApp.services')
    .factory('favoriteCoachesService',['$http','$resource','$q',
        function( $http , $resource , $q ) {

            "use strict";

            var url_prefix = 'api/userEndpoint';

            var serv={};
            var type='coachers';
            serv.favorites = undefined;

            serv.getAllFavorites = function(){
                return $resource(url_prefix + '/listCoaches').query().$promise;
            };

            serv.setFavorites = function(favorites){
                serv.favorites = favorites;
            };

            serv.getFavorites = function(){
                return serv.favorites;
            };

            return serv;

}]);