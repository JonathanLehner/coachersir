angular.module('myApp.controllers.main')
    .controller('coachersCtrl',['$scope','$state','$translate',function($scope,$state,$translate)
    {
        $scope.gender = "undefined";

        $scope.coachers = [{
            "name":"׳³ֲ¢׳³ג€�׳³ג„¢",
            "age":"22",
            "gender":"F",
            "location":"׳³ֲ ׳³ג„¢׳³ֲ¨ ׳³ג€˜׳³ֲ ׳³ג„¢׳³ן¿½",
            "mainPhoto":"../photos/coachers/ADI/ADI1.jpg",
            "experience":["׳³ֲ§׳³ג„¢׳³ֲ§׳³ג€˜׳³ג€¢׳³ֲ§׳³ֲ¡", "׳³ג€“׳³ג€¢׳³ן¿½׳³ג€˜׳³ג€�", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜ ׳³ג€�׳³ג„¢׳³ֲ ׳³ן¿½׳³ן¿½׳³ג„¢", "TRX"],
            "photos": ["../photos/coachers/ADI/ADI1.jpg","../photos/coachers/ADI/ADI2.jpg"]
        },
        {
            "name":"׳³ן¿½׳³ג„¢׳³ֳ—׳³ג„¢",
            "age":"26",
            "gender":"M",
            "location":"׳³ג€”׳³ג€¢׳³ן¿½׳³ג€¢׳³ן¿½",
            "experience":["׳³ֲ§׳³ג„¢׳³ֲ§׳³ג€˜׳³ג€¢׳³ֲ§׳³ֲ¡", "׳³ג€“׳³ג€¢׳³ן¿½׳³ג€˜׳³ג€�", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜ ׳³ג€�׳³ג„¢׳³ֲ ׳³ן¿½׳³ן¿½׳³ג„¢", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳³ן¿½׳³ג„¢׳³ֳ—׳³ג„¢",
            "age":"26",
            "gender":"M",
            "location":"׳³ג€”׳³ג€¢׳³ן¿½׳³ג€¢׳³ן¿½",
            "experience":["׳³ֲ§׳³ג„¢׳³ֲ§׳³ג€˜׳³ג€¢׳³ֲ§׳³ֲ¡", "׳³ג€“׳³ג€¢׳³ן¿½׳³ג€˜׳³ג€�", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜ ׳³ג€�׳³ג„¢׳³ֲ ׳³ן¿½׳³ן¿½׳³ג„¢", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳³ן¿½׳³ג„¢׳³ֳ—׳³ג„¢",
            "age":"26",
            "gender":"M",
            "location":"׳³ג€”׳³ג€¢׳³ן¿½׳³ג€¢׳³ן¿½",
            "experience":["׳³ֲ§׳³ג„¢׳³ֲ§׳³ג€˜׳³ג€¢׳³ֲ§׳³ֲ¡", "׳³ג€“׳³ג€¢׳³ן¿½׳³ג€˜׳³ג€�", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜ ׳³ג€�׳³ג„¢׳³ֲ ׳³ן¿½׳³ן¿½׳³ג„¢", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳³ן¿½׳³ג„¢׳³ֳ—׳³ג„¢",
            "age":"26",
            "gender":"M",
            "location":"׳³ג€”׳³ג€¢׳³ן¿½׳³ג€¢׳³ן¿½",
            "experience":["׳³ֲ§׳³ג„¢׳³ֲ§׳³ג€˜׳³ג€¢׳³ֲ§׳³ֲ¡", "׳³ג€“׳³ג€¢׳³ן¿½׳³ג€˜׳³ג€�", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜ ׳³ג€�׳³ג„¢׳³ֲ ׳³ן¿½׳³ן¿½׳³ג„¢", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳³ן¿½׳³ג„¢׳³ֳ—׳³ג„¢",
            "age":"26",
            "gender":"M",
            "location":"׳³ג€”׳³ג€¢׳³ן¿½׳³ג€¢׳³ן¿½",
            "experience":["׳³ֲ§׳³ג„¢׳³ֲ§׳³ג€˜׳³ג€¢׳³ֲ§׳³ֲ¡", "׳³ג€“׳³ג€¢׳³ן¿½׳³ג€˜׳³ג€�", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜ ׳³ג€�׳³ג„¢׳³ֲ ׳³ן¿½׳³ן¿½׳³ג„¢", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳³ן¿½׳³ג„¢׳³ֳ—׳³ג„¢",
            "age":"26",
            "gender":"M",
            "location":"׳³ג€”׳³ג€¢׳³ן¿½׳³ג€¢׳³ן¿½",
            "experience":["׳³ֲ§׳³ג„¢׳³ֲ§׳³ג€˜׳³ג€¢׳³ֲ§׳³ֲ¡", "׳³ג€“׳³ג€¢׳³ן¿½׳³ג€˜׳³ג€�", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜ ׳³ג€�׳³ג„¢׳³ֲ ׳³ן¿½׳³ן¿½׳³ג„¢", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳³ן¿½׳³ג„¢׳³ֳ—׳³ג„¢",
            "age":"26",
            "gender":"M",
            "location":"׳³ג€”׳³ג€¢׳³ן¿½׳³ג€¢׳³ן¿½",
            "experience":["׳³ֲ§׳³ג„¢׳³ֲ§׳³ג€˜׳³ג€¢׳³ֲ§׳³ֲ¡", "׳³ג€“׳³ג€¢׳³ן¿½׳³ג€˜׳³ג€�", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜", "׳³ֲ¢׳³ג„¢׳³ֲ¦׳³ג€¢׳³ג€˜ ׳³ג€�׳³ג„¢׳³ֲ ׳³ן¿½׳³ן¿½׳³ג„¢", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        }];


        $scope.getGender = function( gender ){
            if(gender === 'F'){
                $scope.gender = $translate.instant("Coach.Gender.Female");
            }else{
                $scope.gender =   $translate.instant("Coach.Gender.Male");
            }
         };

        $scope.coachersClicked = function(){
            $state.go('details');
        };

        $scope.isHome.flag = false;

        var init = function(){
        };

        init();
    }
]);