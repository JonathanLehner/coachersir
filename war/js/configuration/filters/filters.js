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
    .filter('filterByDistanceLocation',function(){
        "use strict";
        return function(coaches,location,maxDistance){

            if(maxDistance === undefined || maxDistance ===null){
                maxDistance = 50;
            }

            var resultCoaches = [];
            if(coaches && location !== undefined & location !== null){
                var filterByLocation = function(location){
                    var compLocation = new google.maps.LatLng(location.latitude, location.longitude);
                    return function(coach) {
                        var coachLocation = new google.maps.LatLng(coach.location.latitude, coach.location.longitude);
                        var distance = google.maps.geometry.spherical.computeDistanceBetween(coachLocation,compLocation);
                        return distance < maxDistance;
                    }
                };

                resultCoaches = coaches.filter(filterByLocation(location));
            }

            return resultCoaches;
        }
    })
    .filter('filterByRegion',function(){
        "use strict";
        return function(coaches,state){
        }
    })
    .filter('filterByCity',function(){
        "use strict";
        return function(coaches,state){
        }
    })
    .filter('filterByPrice',function(){
        "use strict";
        return function(coaches,price){

            var resultCoaches = [];
            if(coaches && price !== undefined & price !== null){
                var filterByPrice = function(price){
                    return function(coach) {
                        return coach.price_per_hour < price
                    }
                };

                resultCoaches = coaches.filter(filterByPrice(price));
            }

            return resultCoaches;
        }
    })
    .filter('filterByDegrees',function(){
        "use strict";
        return function(coaches,degrees){

            var resultCoaches = [];
            if(coaches && degrees){

                var filterByDegrees = function(degrees){
                    return function(coach) {
                        return degrees.some(function(degree){
                            return coach.degrees.indexOf(degree) > -1
                        })
                    }
                };

                resultCoaches = coaches.filter(filterByDegrees(degrees));
            }

            return resultCoaches;
        }
    })
    .filter('filterContentByTags',function(){
        "use strict";
        return function(contents,tags){

            var resultContents = [];
            if(contents && tags){

                var filterContentByTags = function(tags){
                    return function(content) {
                        return tags.some(function(tag){
                            return content.tags.indexOf(tag) > -1
                        })
                    }
                };

                resultContents = contents.filter(filterContentByTags(tags));
            }

            return resultContents;
        }
    })
     .filter('pagination', function(){
        return function(input, start) {
            start = parseInt(start, 10);
            if (!input || !input.length) { return; }
            return input.slice(start);
        };
    });