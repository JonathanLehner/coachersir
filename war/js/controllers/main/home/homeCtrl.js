angular.module('myApp.controllers.main')
    .controller('homeCtrl',['$scope','videoService','loadingSpinnerService','$timeout',function($scope, videoService,loadingSpinnerService,$timeout)
    {
        $scope.videos = undefined;

        var vm = this;

        $scope.gPlace;


        $scope.slides = [
            {'src': 'http://i.ytimg.com/vi_webp/TNBq077wlmc/mqdefault.webp','video':{content:'https://www.youtube.com/embed/TNBq077wlmc',headline:"עדי מתאמנת",description:"עדי מאמנת הכל"}},
            {'src': 'js/controllers/main/home/images/photo3.jpg','video':{}},
            {'src': 'js/controllers/main/home/images/photo4.jpg','video':{}},
            {'src': 'js/controllers/main/home/images/photo5.jpg','video':{}},
            {'src': 'js/controllers/main/home/images/photo6.jpg','video':{}},
            {'src': 'js/controllers/main/home/images/photo7.jpg','video':{}},
            {'src': 'js/controllers/main/home/images/photo8.jpg','video':{}}
        ];


        $scope.options = {
            sourceProp: 'src',
            videoProp: 'videoRef',
            visible: 5,
            perspective: 35,
            startSlide: 0,
            border: 3,
            dir: 'ltr',
            width: 360,
            height: 270,
            space: 220
        };

        $scope.removeImage = removeImage;
        $scope.addImage = addImage;
        $scope.selectedClick = selectedClick;
        $scope.slideChanged = slideChanged;
        $scope.beforeChange = beforeChange;
        $scope.lastSlide = lastSlide;

        var init = function(){
                getAllVideos();
        };

        function lastSlide(index) {
            console.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function beforeChange(index) {
            console.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function selectedClick(index) {
            console.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function slideChanged(index) {
            console.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function addImage(src) {
            vm.slides.push({
                src: src
            });
        }

        function removeImage(index) {
            vm.slides.splice(vm.slides.indexOf(vm.slides[index]), 1);
        }

        var getAllVideos = function(){
            $scope.videos = videoService.getVideos();

            if(!$scope.videos) {

                videoService.getAll().then(function (data) {

                    loadingSpinnerService.showProgress();

                    $scope.videos = data.map(function (video) {
                        video.contentOffset = video.content + "#t=3";
                        video.shortDesc = video.description.slice(0, 15) + "...";
                        if (video.description.length > 15) {
                            video.flag = true;
                        } else {
                            video.flag = false;
                        }

                        return video;
                    });

                    videoService.setVideos($scope.videos);

                    $timeout(function () {
                        loadingSpinnerService.hideProgress();
                    }, 8000);


                });
            }
        };

        $scope.playVideo = function (video){
            videoService.playVideo(video);
        };

        //Paging
        $scope.itemsPerPage = 9;
        $scope.currentPage = 0;

        $scope.numberOfPages = function() {
            if(!$scope.videos){
                return 0;
            }
            return Math.ceil($scope.videos.length / $scope.pageSize);
        };

        $scope.range = function() {
            var rangeSize = 4;
            var ps = [];
            var start;
            start = $scope.currentPage;

            if(rangeSize >  $scope.pageCount()){
                rangeSize =  $scope.pageCount();
            }

            if ((start + rangeSize) > $scope.pageCount() ) {
                start = $scope.pageCount() - rangeSize;
            }
            for (var i=start; i< start+rangeSize; i++) {
                ps.push(i);
            }
            return ps;
        };

        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.DisablePrevPage = function() {
            return $scope.currentPage === 0 ? "disabled" : "";
        };

        $scope.pageCount = function() {
            if(!$scope.videos){
                return 0;
            }
            return Math.ceil($scope.videos.length/$scope.itemsPerPage);
        };

        $scope.nextPage = function() {
            if ($scope.currentPage > $scope.pageCount()) {
                $scope.currentPage++;
            }
        };

        $scope.DisableNextPage = function() {
            return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        };

        $scope.setPage = function(n) {
            $scope.currentPage = n;
        };

        //Paging


        init();



    }
]);