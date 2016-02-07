/**
 * Created by itay on 2/5/2016.
 */
angular.module('myApp.directives').directive('addJssor',function(){

    return{
        restrict:'AE',
        templateUrl:"/app/modals/user/addJssor.html",
        scope:{
            images:'='
        },
        link:function($scope) {
        }
    }
});