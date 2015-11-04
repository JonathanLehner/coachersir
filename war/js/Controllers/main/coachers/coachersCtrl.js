angular.module('myApp.controllers.main')
    .controller('coachersCtrl',['$scope','$state','$translate',function($scope,$state,$translate)
    {
        $scope.gender = "undefined";

        $scope.coachers = [{
            "name":"׳¢׳“׳™",
            "age":"22",
            "gender":"F",
            "location":"׳ ׳™׳¨ ׳‘׳ ׳™׳�",
            "mainPhoto":"../photos/coachers/ADI/ADI1.jpg",
            "experience":["׳§׳™׳§׳‘׳•׳§׳¡", "׳–׳•׳�׳‘׳”", "׳¢׳™׳¦׳•׳‘", "׳¢׳™׳¦׳•׳‘ ׳“׳™׳ ׳�׳�׳™", "TRX"],
            "photos": ["../photos/coachers/ADI/ADI1.jpg","../photos/coachers/ADI/ADI2.jpg"]
        },
        {
            "name":"׳�׳™׳×׳™",
            "age":"26",
            "gender":"M",
            "location":"׳—׳•׳�׳•׳�",
            "experience":["׳§׳™׳§׳‘׳•׳§׳¡", "׳–׳•׳�׳‘׳”", "׳¢׳™׳¦׳•׳‘", "׳¢׳™׳¦׳•׳‘ ׳“׳™׳ ׳�׳�׳™", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳�׳™׳×׳™",
            "age":"26",
            "gender":"M",
            "location":"׳—׳•׳�׳•׳�",
            "experience":["׳§׳™׳§׳‘׳•׳§׳¡", "׳–׳•׳�׳‘׳”", "׳¢׳™׳¦׳•׳‘", "׳¢׳™׳¦׳•׳‘ ׳“׳™׳ ׳�׳�׳™", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳�׳™׳×׳™",
            "age":"26",
            "gender":"M",
            "location":"׳—׳•׳�׳•׳�",
            "experience":["׳§׳™׳§׳‘׳•׳§׳¡", "׳–׳•׳�׳‘׳”", "׳¢׳™׳¦׳•׳‘", "׳¢׳™׳¦׳•׳‘ ׳“׳™׳ ׳�׳�׳™", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳�׳™׳×׳™",
            "age":"26",
            "gender":"M",
            "location":"׳—׳•׳�׳•׳�",
            "experience":["׳§׳™׳§׳‘׳•׳§׳¡", "׳–׳•׳�׳‘׳”", "׳¢׳™׳¦׳•׳‘", "׳¢׳™׳¦׳•׳‘ ׳“׳™׳ ׳�׳�׳™", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳�׳™׳×׳™",
            "age":"26",
            "gender":"M",
            "location":"׳—׳•׳�׳•׳�",
            "experience":["׳§׳™׳§׳‘׳•׳§׳¡", "׳–׳•׳�׳‘׳”", "׳¢׳™׳¦׳•׳‘", "׳¢׳™׳¦׳•׳‘ ׳“׳™׳ ׳�׳�׳™", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳�׳™׳×׳™",
            "age":"26",
            "gender":"M",
            "location":"׳—׳•׳�׳•׳�",
            "experience":["׳§׳™׳§׳‘׳•׳§׳¡", "׳–׳•׳�׳‘׳”", "׳¢׳™׳¦׳•׳‘", "׳¢׳™׳¦׳•׳‘ ׳“׳™׳ ׳�׳�׳™", "TRX"],
            "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
            "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
            videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
        },
        {
            "name":"׳�׳™׳×׳™",
            "age":"26",
            "gender":"M",
            "location":"׳—׳•׳�׳•׳�",
            "experience":["׳§׳™׳§׳‘׳•׳§׳¡", "׳–׳•׳�׳‘׳”", "׳¢׳™׳¦׳•׳‘", "׳¢׳™׳¦׳•׳‘ ׳“׳™׳ ׳�׳�׳™", "TRX"],
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
            $state.go('detailed');
        };

        $scope.isHome.flag = false;

        var init = function(){
        };

        init();
    }
]);