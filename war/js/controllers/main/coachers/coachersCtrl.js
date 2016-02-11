angular.module('myApp.controllers.main')
    .controller('coachersCtrl',['$scope','$state','loadingSpinnerService','$translate','userService','coachersService','$window','$rootScope',function($scope,$state,loadingSpinnerService,$translate,userService,coachersService,$window,$rootScope)
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
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }
        };

        $scope.DisableNextPage = function() {
            return $scope.currentPage + 1 === $scope.pageCount() ? "disabled" : "";
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
            $scope.coachers = coachersService.getCoachersData();
            if($scope.coachers.length === undefined || $scope.coachers.length === 0){
                loadingSpinnerService.showProgress();
                coachersService.getAll().then(function (data) {
                    setTimeout(function(){
                        $scope.coachers = data;
                        coachersService.setCoachersData(data);

                        loadingSpinnerService.hideProgress();
                    },2000);
                })
            }
        }

        var current = 0;
        var previous = 1;

        angular.element($window).bind("scroll",function() {
            $scope.heightMap = undefined;

            if ($scope.heightMap === undefined) {
                $scope.heightMap = (screen.height - screen.height * 0.25) + 'px';
            }

            var docCheckBox = $("checkBoxFiltersId");
            var offset = $(document).scrollTop();
            var hr = document.getElementById("hrCheckBox");
            var offsetTop = 0;
            if (hr) {
                offsetTop = document.getElementById("hrCheckBox").offsetTop;
            }

            if(offset > offsetTop){
                $scope.top = offset-offsetTop - 10;
            }else{
                $scope.top = 0;
            }

            if(offset > $scope.heightMap)
            {
                $scope.top = offset -  $scope.heightMap
            }
            previous = current;
            current = offset;


            $rootScope.$digest();
        });

        init();
    }
]);