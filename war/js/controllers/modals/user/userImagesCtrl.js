angular.module('myApp.controllers')
    .controller('userImagesCtrl',['$scope','staticDataService','Upload','$stateParams','imageService','loadingSpinnerService','$http','$compile','$rootScope',
                          function($scope , staticDataService , Upload , $stateParams , imageService , loadingSpinnerService , $http,$compile,$rootScope){

    	var user = $scope.$parent.user;
    	
        $scope.id = $stateParams.id;
        
        var init = function(){
            getImages();
        };

        var getImages = function(){
            loadingSpinnerService.showProgress("user-image");
            imageService.getByUser($scope.id).then(function(response){
                $scope.images = response;
                if($scope.images.length !== 0)
                {
                    setTimeout(function(){
                        $scope.jssor_1_slider_init();
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


          $scope.getData = function(){
              $scope.images = {};
              getImages();
          };


      var jssor_1_slider = undefined;
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

            var myNode = angular.element("#addJssor");
            myNode.remove();

            $compile(myNode);

            var iElement = $("#jssor");

            var svg = $compile('<div id="addJssor" add-jssor images="images"></div>')($scope);

           iElement.append(svg);


            setTimeout(function(){
            jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

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
            },500);
        };

        init();

    }])

