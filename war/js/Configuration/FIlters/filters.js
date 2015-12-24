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

    }])
    .filter('ageFilter', [function() {
	     
    	function calculateAge(birthday) { // birthday is a date
    		
    		var dateParse = Date.parse(birthday);
    		var ageDifMs = Date.now() - dateParse;
    		var ageDate = new Date(ageDifMs); // miliseconds from epoch
	        return Math.abs(ageDate.getUTCFullYear() - 1970);
	     }
	
	     return function(birthdate) { 
	           return calculateAge(birthdate);
	     };
     }]).filter('pagination', function()
    {
        return function(input, start) {
            start = parseInt(start, 10);
            if (!input || !input.length) { return; }
            return input.slice(start);
        };
    });
    
    
    