angular.module('myApp.directives').directive('loadingSpinner',['$interval', function($interval) {
    return {
        restrict: 'AE',
        templateUrl:"/app/loadingSpinner.html",

        link: function(scope) {

            var  j = 0, counter = 0;

            scope.modes = [];
            scope.activated = true;
            scope.determinateValue = 30;

            /**
             * Turn off or on the 5 themed loaders
             */
            scope.toggleActivation = function () {
                if (!scope.activated) scope.modes = [];
                if (scope.activated) j = counter = 0;
            };

            // Iterate every 100ms, non-stop
            $interval(function () {
                // Increment the Determinate loader
                scope.determinateValue += 1;
                if (scope.determinateValue > 100) {
                    scope.determinateValue = 30;
                }

                // Incrementally start animation the five (5) Indeterminate,
                // themed progress circular bars

                if ((j < 5) && !scope.modes[j] && scope.activated) {
                    scope.modes[j] = 'indeterminate';
                }
                if (counter++ % 4 == 0) j++;

            }, 100, 0, true);
        }
    };

    }]);