angular.module('myApp.directives')
    .directive('reverseGeocode', function () {
        return {
            restrict: 'E',
            scope: {
            	location:'@'
            },
            template: '<div></div>',
            link: function (scope, element, attrs) {
        		var geocoder = new google.maps.Geocoder();
        		var locationObj = angular.fromJson(scope.location);
                if(locationObj !== undefined){
                	var latlng = new google.maps.LatLng(locationObj.latitude, locationObj.longitude);
	                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
	                    if (status == google.maps.GeocoderStatus.OK) {
	                        if (results[0]) {
	                            element.text(results[0].address_components[1].short_name);
	                        } else {
	                            element.text('Location not found');
	                        }
	                    } else {
	                        element.text(' ' + status);
	                    }
	                });
                }
                
                scope.$on('$destroy', function(){
                	geocoder=undefined;
                	locationObj=undefined;
                });
            },
            replace: true
        }
    });