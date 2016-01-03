/**
 * Created by itay on 12/29/2015.
 */
angular.module('myApp.directives').directive('displayContent', function() {
    return {
        restrict: 'E',
        templateUrl:"/app/main/allContent.html",
        scope: {
            url: '@url',
            contents: '=',
            itemsPerPage:'='
        },
        link: function($scope) {

            $scope.itemsPerPage = 12;
            $scope.currentPage = 0;

            $scope.numberOfPages = function() {
                return Math.ceil($scope.contents.length / $scope.pageSize);
            };

            $scope.range = function() {
                var rangeSize = 4;
                var ps = [];
                var start;
                start = $scope.currentPage;
                if ( start > $scope.pageCount()-rangeSize ) {
                    start = $scope.pageCount()-rangeSize+1;
                }
                for (var i=start; i<start+rangeSize; i++) {
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
                return Math.ceil($scope.contents.length/$scope.itemsPerPage)-1;
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

            $scope.coacherClicked = function(content){
                $state.go('details',{ id: content.id});
            };

        }
    };
})
