angular.module('myApp.services')
    .factory('loadingSpinnerService',['$resource','$compile',function($resource,$compile) {
        'use strict';

        var APPLICATION_SPINNER = 'loadingDiv';

        var serv = {};

        serv.showProgress = function(elementName){
            if(elementName && elementName !== null){
                serv.ProgressOnElement(elementName);
            }else{
                serv.ProgressOnElement(APPLICATION_SPINNER);
            }
        };

        serv.hideProgress = function(elementName){
            if(elementName && elementName !== null){
                serv.RemoveProgressOnElement(elementName);
            }else{
                serv.RemoveProgressOnElement(APPLICATION_SPINNER);
            }
        };

        serv.ProgressOnElement = function(elementName){
            var ajaxContainer = $("#"+elementName);
            if(ajaxContainer !== null){
                ajaxContainer.children().addClass('ng-hide');
                if(ajaxContainer.scope!== undefined && ajaxContainer.scope() !== undefined){
                 var newElement = $compile('<loading-spinner></loading-spinner>')(ajaxContainer.scope());
                }else{
                    try{
                        var newElement = $compile('<loading-spinner></loading-spinner>')($scope);
                    }catch (err){
                        console.log(err);
                    }
                }
                ajaxContainer.append(newElement);
                //$.compile(ajaxContainer);
               // ajaxContainer.children().attr("ng-show","false");
            }
        };

        serv.RemoveProgressOnElement = function(elementName){
            var ajaxContainer = angular.element("#"+elementName);
            if(ajaxContainer !== null){
                ajaxContainer.css({'background-color':'white'});
                ajaxContainer.children().removeClass('ng-hide');
                var progress = angular.element("loading-spinner");
                progress.empty();

                //ajaxContainer.children().css({'visibility':'show'});
            }
        };

        return serv;

    }]);