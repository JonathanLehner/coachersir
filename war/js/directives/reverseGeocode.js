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
                var latlng = new google.maps.LatLng(locationObj.latitude, locationObj.longitude);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            element.text(results[1].formatted_address);
                        } else {
                            element.text('Location not found');
                        }
                    } else {
                        element.text(' ' + status);
                    }
                });
            },
            replace: true
        }
    });