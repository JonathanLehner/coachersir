/**
 * Created by itay on 3/7/2016.
 */
var angular;
angular.module('myApp.controllers')
    .controller('favoriteCtrl',['$scope','favoriteCoachesService','loadingSpinnerService',function($scope,favoriteCoachesService,loadingSpinnerService) {
        "use strict";
        var getFavorites = function () {
            $scope.favorites = favoriteCoachesService.getFavorites();

            if (!$scope.favorites || $scope.favorites.size === 0) {

                loadingSpinnerService.showProgress("favorite");
                favoriteCoachesService.getAllFavorites().then(function (data) {

                    $scope.favorites = data;
                    });
                favoriteCoachesService.setFavorites($scope.favorites);
                    loadingSpinnerService.hideProgress("favorite");
            }
        };

        getFavorites();
        }]);