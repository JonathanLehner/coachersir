/**
 * Created by itay on 12/7/2015.
 */
angular.module('myApp.filters').filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]).filter('pagination', function()
{
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
    });