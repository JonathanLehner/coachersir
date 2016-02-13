angular.module('myApp.filters')
    .filter('daysTrans',['$translate',function($translate){
         return function(input){
             var tran = "SignUp." + input;
             var word = $translate.instant(tran);
             if(word !== tran) {
                 return word;
             }
             else return input;
         };
    }])
    .filter('monthTrans',['$translate',function($translate){
        return function(input){
            var tran = "SignUp.Month." + input;
            var word = $translate.instant(tran);
            if(word !== tran) {
                return word;
            }
            else return input;
        };
    }])
    .filter('yearTrans',['$translate',function($translate){
        return function(input){
            var tran = "SignUp." + input;
            var word = $translate.instant(tran);
            if(word !== tran) {
                return word;
            }
            else return input;
        };
    }])
    .filter('ageFromBirthdayFilter', [function() {
	     function calculateAge(birthday) { // birthday is a date
             if(birthday !== null && birthday !== undefined){
    		    var dateParse = new Date(birthday);
    		    var ageDifMs = Date.now() - dateParse;
    		    var ageDate = new Date(ageDifMs); // miliseconds from epoch
	            return Math.abs(ageDate.getUTCFullYear() - 1970);
             }else{
                 return undefined;
             }
	    }
	
	    return function(birthdate) { 
	    	return calculateAge(birthdate);
	    };
     }])
     .filter('genderFilter', ['$translate',function($translate) {
    	 return function(input){
             var gender;
    		 
    		 if(input === 'true' || input===true){
    			 gender="Male";
    		 }else{
    			 gender="Female";
    		 }
    		 
    		 if(gender){
    			 var tran = "General." + gender;
                 var word = $translate.instant(tran);
                 
                 return word;
    		 }
    		 
    		 return null;
         };
     }])
     .filter('staticDataIdToNameFilter', ['staticDataService',function(staticDataService) {
    	 return function(input){
    		 var staticData = staticDataService.getGenericDataById(input);
    		 
    		 if(staticData)
    			 return staticData.name;
    		 
    		 return input;
         };
     }])
    .filter('tagId', ['staticDataService',function(staticDataService) {
        return function(id){
            var tags = staticDataService.allTags();
            var name;
            if(tags)
            {
                angular.forEach(tags,function(value){
                    if(value.id === id){
                        name = value.name;
                    }
                });
            }
            return name;
        };
    }])
     .filter('pagination', function(){
        return function(input, start) {
            start = parseInt(start, 10);
            if (!input || !input.length) { return; }
            return input.slice(start);
        };
    });