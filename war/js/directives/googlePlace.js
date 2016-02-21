/**
 * Created by itay on 12/28/2015.
 */

angular.module('myApp.directives').directive('googleplace', function() {
    return {
        //require: 'ngModel',
        scope:{location:'@'},
        link: function(scope, element, attrs, model) {
            var options = {
                types: ['geocode'],
                componentRestrictions: {country: 'isr'}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    var place = scope.gPlace.getPlace();
                    scope.location = {"latitude":place.geometry.location.lat(),
                                      "longitude":place.geometry.location.lng()};
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});