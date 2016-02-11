/**
 * Created by itay on 12/23/2015.
 */
angular.module('myApp.controllers.main')
    .controller('articleReaderCtrl',['$scope','articleObj','$state','$modalInstance',function($scope, articleObj,$state,$modalInstance) {
        $scope.title = articleObj.title;
        $scope.description = articleObj.description;
        $scope.content = articleObj.content;

        $scope.toCoach = function(){
            $scope.closeModal();
            $state.go("details",{id:articleObj.user_id,currentState:'main.articles'});
        }

        $scope.closeModal = function(){
            $modalInstance.dismiss();
        }
    }]);