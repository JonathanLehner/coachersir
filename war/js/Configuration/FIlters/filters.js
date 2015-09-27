/**
 * Created by itay on 9/27/2015.
 */
angular.module('myApp.filters')
    .filter('daysTrans',['$translate',function($translate){
         return function(input){
             var tran = "SignUp." + input;
             var word = $translate.instant(tran);
             if(word !== tran) {
                 return word;
             }
             else return input;
         }

    }])
    .filter('monthTrans',['$translate',function($translate){
        return function(input){
            var tran = "SignUp.Month." + input;
            var word = $translate.instant(tran);
            if(word !== tran) {
                return word;
            }
            else return input;
        }

    }])
    .filter('yearTrans',['$translate',function($translate){
        return function(input){
            var tran = "SignUp." + input;
            var word = $translate.instant(tran);
            if(word !== tran) {
                return word;
            }
            else return input;
        }

    }]);