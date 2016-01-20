angular.module('myApp.controllers')
    .controller('userImagesCtrl',['$scope','staticDataService','Upload','$stateParams','imageService','loadingSpinnerService','$http',function($scope,staticDataService,Upload,$stateParams,imageService,loadingSpinnerService,$http) {

    	var user = $scope.$parent.user;
    	
        $scope.id = $stateParams.id;

        $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
        $scope.filename = '';

        var frob = "72157662312866442-0b72a325b45e8177-136631469";

        $scope.uploadFile = function() {
            Upload.upload({
                url: 'http://localhost:90/UploadImg/phpflickr/phpFlickr-2.2.0/uploadFile.php',
                method: 'POST',
                file: dropzone.files[0],
                sendFieldsAs: 'form',
                fields: {
                    frob: frob
                }
            }).progress(function(env){
            }).success(function(data,status,header,config){
                console.log(data);
            }).error(function(data){
                console.log(data);
            })
        };

        $scope.reset = function() {
            $scope.resetDropzone();
        };

        var init = function(){
            getImages();

                console.log("Hi");
        };

        var getImages = function(){
            loadingSpinnerService.showProgress("user-image");
            imageService.getByUser($scope.id).then(function(response){
                $scope.images = response;
                if($scope.images.length !== 0)
                {
                    setTimeout(function(){
                        $scope.jssor_1_slider_init()
                        loadingSpinnerService.hideProgress("user-image");
                    },300);
                }else{
                    loadingSpinnerService.hideProgress("user-image");
                }
            },function(error){
                loadingSpinnerService.hideProgress("user-image");
                alert(error);
            });
        };

        $scope.jssor_1_slider_init = function() {

            var jssor_1_options = {
                $AutoPlay: true,
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                },
                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,
                    $Cols: 9,
                    $SpacingX: 3,
                    $SpacingY: 3,
                    $Align: 260
                }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 600);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        };

        init();

    }]);

