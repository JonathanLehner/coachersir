/**
 * Created by itay on 2/5/2016.
 */
angular.module('myApp.directives').controller('userMenuCtrl', function() {

            $scope.status = {};

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


});
