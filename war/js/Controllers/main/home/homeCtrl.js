angular.module('myApp.controllers.main')
    .controller('homeCtrl',['$scope',function($scope)
    {
        $scope.isHome.flag = true;

        $scope.allVideos = [{
            title:"עבודה קשה",
            explain:"bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla " +
            "bla bla bla bla bla bla bla bla bla " +
            "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla " +
            "bla bla bla bla bla bla bla bla bla " +
            "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla " +
            "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla " +
            "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
            Video:"../../photos/Video/123.mp4"
        },{
            title:"2עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/456.mp4"
        },{
            title:"3עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/789.mp4"
        },{
            title:"עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/123.mp4"
        },{
            title:"עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/123.mp4"
        },{
            title:"2עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/456.mp4"
        },{
            title:"3עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/789.mp4"
        },{
            title:"עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/123.mp4"
        },{
            title:"עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/123.mp4"
        },{
            title:"2עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/456.mp4"
        },{
            title:"3עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/789.mp4"
        },{
            title:"עבודה קשה",
            explain:"asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas"+
            "asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas asd;jasd;ljas;d;la asdm;lasmd;lasmd;lamsasdasdasdasdas",
            Video:"../../photos/Video/123.mp4"
        }

        ];
    }



]);