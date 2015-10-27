angular.module('myApp.controllers.main')
    .controller('coachersCtrl',['$scope','$state',function($scope,$state)
    {
        $scope.gender = "undefined";

            $scope.coachers = [{
            "name":"עדי",
            "age":"22",
            "gender":"F",
            "location":"ניר בנים",
            "mainPhoto":"../photos/coachers/ADI/ADI1.jpg",
            "experience":["קיקבוקס", "זומבה", "עיצוב", "עיצוב דינאמי", "TRX"],
            "photos": ["../photos/coachers/ADI/ADI1.jpg","../photos/coachers/ADI/ADI2.jpg"]
        },
            {
                "name":"איתי",
                "age":"26",
                "gender":"M",
                "location":"חולון",
                "experience":["קיקבוקס", "זומבה", "עיצוב", "עיצוב דינאמי", "TRX"],
                "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
                "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
                videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
            },
                {
                    "name":"איתי",
                    "age":"26",
                    "gender":"M",
                    "location":"חולון",
                    "experience":["קיקבוקס", "זומבה", "עיצוב", "עיצוב דינאמי", "TRX"],
                    "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
                    "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
                    videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
                },
                {
                    "name":"איתי",
                    "age":"26",
                    "gender":"M",
                    "location":"חולון",
                    "experience":["קיקבוקס", "זומבה", "עיצוב", "עיצוב דינאמי", "TRX"],
                    "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
                    "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
                    videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
                },
                {
                    "name":"איתי",
                    "age":"26",
                    "gender":"M",
                    "location":"חולון",
                    "experience":["קיקבוקס", "זומבה", "עיצוב", "עיצוב דינאמי", "TRX"],
                    "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
                    "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
                    videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
                },
                {
                    "name":"איתי",
                    "age":"26",
                    "gender":"M",
                    "location":"חולון",
                    "experience":["קיקבוקס", "זומבה", "עיצוב", "עיצוב דינאמי", "TRX"],
                    "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
                    "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
                    videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
                },
                {
                    "name":"איתי",
                    "age":"26",
                    "gender":"M",
                    "location":"חולון",
                    "experience":["קיקבוקס", "זומבה", "עיצוב", "עיצוב דינאמי", "TRX"],
                    "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
                    "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
                    videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
                },
                {
                    "name":"איתי",
                    "age":"26",
                    "gender":"M",
                    "location":"חולון",
                    "experience":["קיקבוקס", "זומבה", "עיצוב", "עיצוב דינאמי", "TRX"],
                    "mainPhoto":"../photos/coachers/ADI/ADI3.jpg",
                    "photos": ["../photos/coachers/ADI/ADI3.jpg","../photos/coachers/ADI/ADI2.jpg"],
                    videos:["../photos/coachers/ADI/VIDEO/20150118_112227.mp4"]
                }];


        $scope.getGender = function( gender ){
            if(gender === 'F'){
                $scope.gender = "בת";
            }else{
                $scope.gender =  "בן";
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