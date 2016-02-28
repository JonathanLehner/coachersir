angular.module('myApp.directives').directive('addContent',['articleService','imageService','videoService','uploadTokenService','$timeout','loadingSpinnerService','staticDataService','$filter', 
                                                   function(articleService,imageService,videoService,uploadTokenService,$timeout,loadingSpinnerService,staticDataService,$filter) {
    return {
        restrict: 'E',
        templateUrl:"/app/modals/user/content/addContent.html",
        scope: {
            url: '@url',
            user: '=',
            data: '&'
        },
        link: function($scope) {
            $scope.isClicked = false;
            $scope.content = {};
            $scope.isUploading = false;
            $scope.filterSelected = true;
            $scope.userTags = [];
            $scope.tagsEnabled = $scope.$parent.tags;
            var service;

            $scope.$on('saveContent', function(e) {
                $scope.$parent.saveContent = $scope.saveButtonClicked();
            });

            $scope.addContentUrl = "app/modals/user/content/add"+$scope.url+".html";

            var getTags = function(){
                var tags = staticDataService.allTags();
                if(tags === undefined){
                    staticDataService.getAllTags().then(function(response){
                        tags = response;

                        tags.map(function(t){
                            var tag = {
                                name : t.name
                            }
                            return tag;
                        })

                    },function(error){
                        console.log('error loading tags: ' + error);
                    });

                }
                return tags;
            };

            $scope.allTags = getTags();

            $scope.querySearch = function(query) {
                var results = query?
                    $scope.allTags.filter(createFilterFor(query)) :
                    $scope.allTags.filter(getNotSelected());
                return results;
            };

            var createFilterFor = function(query) {
                return function filterFn(tag) {
                    return (tag.name.indexOf(query) != -1);
                };
            };

            var getNotSelected = function(){
                return function filterFn(tag) {
                    return ($scope.userTags.indexOf(tag) === -1);
                };
            };

            var show = function(){
                if($scope.url === "Image") {
                    service = imageService;
                }else if($scope.url === "Video"){
                    service = videoService;
                    uploadTokenService.getUploadToken('video').then(function(data) {
                        console.log('video upload token ' + data);
                        videoService.initVideo(data);
                    });
                }else if($scope.url === "Article"){
                    service = articleService;
                    setTimeout(function(){
                    	service.init();
                    },400);
                }
            };

            show();

            $scope.saveButtonClicked = function(){
                $scope.$parent.status.addClicked = false;
                $scope.isUploading = true;
                $scope.tags = [];
                $scope.userTags.forEach(function(tag){
                    $scope.tags.push(tag.id);
                });
                loadingSpinnerService.showProgress("user-loading");
                service.insert($scope).then(function(data){
                    $scope.isClicked = false;
                        $timeout(function(){
                        $scope.data();
                            loadingSpinnerService.hideProgress("user-loading");
                    },200);
                }).catch(function(data){
                    console.log("no content" + data);
                    loadingSpinnerService.hideProgress("user-loading");
                });
            };

            $scope.hide = function(){
                $scope.isClicked = false;
            }
            
            $scope.$on('$destroy', function(){
            	createFilterFor=undefined;
            	getTags=undefined;
            	getNotSelected=undefined;
            	show=undefined;
            });
        }
    };
}]);
