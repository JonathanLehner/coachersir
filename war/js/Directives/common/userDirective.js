/**
 * Created by itay on 8/28/2015.
 */
myApp.directive('userDirective', function(current) {
    return {
        restrict: 'A',
        scope: {
            selector: '@',
            log: '='
        },
        link: function(scope, elem, attrs, ctrl) {
            var height = $(attrs.selector).height();
            elem.height(height - 300 + 'px');
        }
    };
});