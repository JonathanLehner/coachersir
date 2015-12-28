angular.module('myApp.controllers.main')
    .controller('homeCtrl',['$scope','videoService',function($scope, videoService)
    {
        $scope.isHome.flag = true;

        $scope.videos = undefined;

        var vm = this;

        $scope.slides = [
            {'src': 'http://i.ytimg.com/vi_webp/TNBq077wlmc/mqdefault.webp','videoRef':'https://www.youtube.com/embed/TNBq077wlmc'},
            {'src': 'js/controllers/main/home/images/photo3.jpg','videoRef':'test'},
            {'src': 'js/controllers/main/home/images/photo4.jpg','videoRef':'test'},
            {'src': 'js/controllers/main/home/images/photo5.jpg','videoRef':'test'},
            {'src': 'js/controllers/main/home/images/photo6.jpg','videoRef':'test'},
            {'src': 'js/controllers/main/home/images/photo7.jpg','videoRef':'test'},
            {'src': 'js/controllers/main/home/images/photo8.jpg','videoRef':'test'}
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

        init = function(){
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
            videoService.getAll().then(function(data){
                $scope.videos = data;
            });
        };

        $scope.ages = [];

        $scope.age1 = function (age) {
            console.log($scope.itemsPerPage +  age);
            $scope.ages.push(age);
        };

        init();

    }
]);