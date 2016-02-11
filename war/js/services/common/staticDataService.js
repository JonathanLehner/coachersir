angular.module('myApp.services')
    .factory('staticDataService',['$resource',function($resource) {
        'use strict';

        //var url_prefix = '_ah/api/staticDataEndpoint/v1';
        var url_prefix = 'api/staticDataEndpoint';

        var serv = {};
        var objectives;
        var degrees;
        var degreesIds;
        var tags;
        
        serv.getAllObjectives = function () {
            return $resource(url_prefix + '/listObjectives').query().$promise;
        };

        serv.getAllDegrees = function () {
            return $resource(url_prefix + '/listDegrees').query().$promise;
        };
        
        serv.getAllTags = function () {
        	return $resource(url_prefix + '/listTags').query().$promise;
        };

        serv.allObjectives = function () {
            return objectives;
        };

        serv.allDegrees = function () {
            return degrees;
        };
        
        serv.allDegreesIds = function () {
            return degreesIds;
        };

        serv.allTags = function () {
            return tags;
        };

        // initialize static data
        serv.getAllObjectives().then(function(response){
        	objectives = response;
        },function(error){
        	console.log('error loading objectives: ' + error);
        });
        
        serv.getAllDegrees().then(function(response){
        	degrees = response;
        	degreesIds =[];
        	angular.forEach(serv.allDegrees,function(degree,index){
                serv.allDegreesIds.push(degree.id);
            });
        },function(error){
        	console.log('error loading degrees: ' + error);
        });
        
        serv.getAllTags().then(function(response){
        	tags = response;
        },function(error){
        	console.log('error loading tags: ' + error);
        });
        
        //name by id
        serv.getGenericDataById = function(id){
        	var list = [];
        	var returnVal = undefined;
        	
        	if(degrees){
        		list.push.apply(list,degrees);
        	}
        	if(objectives){
        		list.push.apply(list,objectives);
        	}
        	if(tags){
        		list.push.apply(list,tags);
        	}
        	
        	if(list){
        		list.map(function(staticData){
        			if(staticData.id === id)
        				returnVal = staticData;
        		});
        	}
        	
        	return returnVal;
        }
        
        return serv;
    }]);