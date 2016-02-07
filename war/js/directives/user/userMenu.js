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
            save:'='
        },
        link: function($scope) {
            $scope.addClicked = false;

            var initParam = function(parameter){
                $scope[parameter+'Clicked'] = false;

                if($scope[parameter] === undefined  || $scope[parameter] === false){
                    $scope[parameter+'Enabled'] = false;
                }else{
                    $scope[parameter+'Enabled'] = true;
                }
            };

            initParam("add");
            initParam("edit");
            initParam("save");

            $scope.clicked =function(parameter){
                $scope[parameter+'Clicked'] = !$scope[parameter+'Clicked'];
            };

            $scope.getData = function(){
                $scope.data();
            };

            $scope.saveContentButton = function(){
                    $scope.$broadcast ('saveContent');
            }

        }
    };
});
