angular.module('myApp.services')
    .factory('staticDataService',['$resource',function($resource) {
        'use strict';

        //var url_prefix = '_ah/api/staticDataEndpoint/v1';
        var url_prefix = 'api/staticDataEndpoint';

        var serv = {};
        var allObjectives;
        var allDegrees;
        var allDegreesIds;
        var allTags;
        
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
            return allObjectives;
        };

        serv.allDegrees = function () {
            return allDegrees;
        };
        
        serv.allDegreesIds = function () {
            return allDegreesIds;
        };

        serv.allTags = function () {
            return allTags;
        };

        // initialize static data
        serv.getAllObjectives().then(function(response){
        	allObjectives = response;
        },function(error){
        	console.log('error loading objectives: ' + error);
        });
        
        serv.getAllDegrees().then(function(response){
        	allDegrees = response;
        	allDegreesIds =[];
        	angular.forEach(allDegrees,function(degree,index){
        		allDegreesIds.push(degree.id);
            });
        },function(error){
        	console.log('error loading degrees: ' + error);
        });
        
        serv.getAllTags().then(function(response){
        	allTags = response;
        },function(error){
        	console.log('error loading tags: ' + error);
        });
        
        //name by id
        serv.getGenericDataById = function(id){
        	var list = [];
        	var returnVal = undefined;
        	
        	if(allDegrees){
        		list.push.apply(list,allDegrees);
        	}
        	if(allObjectives){
        		list.push.apply(list,allObjectives);
        	}
        	if(allTags){
        		list.push.apply(list,allTags);
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