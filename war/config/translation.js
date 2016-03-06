/**
 * Created by itay on 9/19/2015.
 */
angular.module('myApp')
    .config(['$translateProvider',function($translateProvider){
        'use strict';

        $translateProvider.useStaticFilesLoader({
            files:[{
                prefix:'config/languages/locale-',
                suffix:'.json'
            }]
        });

        $translateProvider.preferredLanguage('he_IS');
    }])