angular.module('myApp.controllers.main')
    .controller('coachersCtrl',['$scope','$state','loadingSpinnerService','$translate','userService',function($scope,$state,loadingSpinnerService,$translate,userService)
    {
        $scope.itemsPerPage = 12;
        $scope.currentPage = 0;

        var init = function(){
            getCoaches();
        };

        $scope.numberOfPages = function() {
            return Math.ceil($scope.coachers.length / $scope.pageSize);
        };

        $scope.range = function() {
            var rangeSize = 4;
            var ps = [];
            var start;
            start = $scope.currentPage;

            if(rangeSize >  $scope.pageCount()){
                rangeSize =  $scope.pageCount();
            }

            if ((start + rangeSize) > $scope.pageCount() ) {
                start = $scope.pageCount() - rangeSize;
            }
            for (var i=start; i< start+rangeSize; i++) {
                ps.push(i);
            }
            return ps;
        };

        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.DisablePrevPage = function() {
            return $scope.currentPage === 0 ? "disabled" : "";
        };

        $scope.pageCount = function() {
            return Math.ceil($scope.coachers.length/$scope.itemsPerPage)-1;
        };

        $scope.nextPage = function() {
            if ($scope.currentPage > $scope.pageCount()) {
                $scope.currentPage++;
            }
        };

        $scope.DisableNextPage = function() {
            return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        };

        $scope.setPage = function(n) {
            $scope.currentPage = n;
        };

        $scope.gender = "undefined";

        $scope.getGender = function( gender ){
            if(gender === 'F'){
                $scope.gender = $translate.instant("User.Gender.Female");
            }else{
                $scope.gender =   $translate.instant("User.Gender.Male");
            }
         };

        $scope.coacherClicked = function(coach){
            $state.go('details',{ id: coach.id});
        };

        var getCoaches = function() {

            if($scope.coachers.length === undefined || $scope.coachers.length === 0){
                loadingSpinnerService.showProgress();
                userService.getAll().then(function (data) {
                    setTimeout(function(){
                        $scope.coachers = data;

                        loadingSpinnerService.hideProgress();
                    },2000);
                })
            }
        }

        init();
    }
]);