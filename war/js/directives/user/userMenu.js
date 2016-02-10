/**
 * Created by itay on 2/5/2016.
 */
angular.module('myApp.directives').directive('userMenu', function() {
    return {
        restrict: 'A',
        templateUrl:"/app/modals/user/userMenu.html",
        scope: {
            type:'@',
            user:'=',
            data:'&',
            add:'=',
            edit:'=',
            save:'=',
            tags:'='
        },
        link: function($scope) {
            $scope.status = {}

            $scope.status.addClicked = false;

            var initParam = function(parameter){
                $scope.status[parameter+'Clicked'] = false;

                if($scope[parameter] === undefined  || $scope[parameter] === false){
                    $scope.status[parameter+'Enabled'] = false;
                }else{
                    $scope.status[parameter+'Enabled'] = true;
                }
            };

            initParam("add");
            initParam("edit");
            initParam("save");

            $scope.clicked =function(parameter){
                $scope.status[parameter+'Clicked'] = !$scope.status[parameter+'Clicked'];
            };

            $scope.getData = function(){
                $scope.data();
            };

            $scope.saveContentButton = function(){
                     $scope.status.addClicked = false;
                    $scope.$broadcast ('saveContent');
            }

        }
    };
});
