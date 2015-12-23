angular.module('myApp.controllers')
    .controller('userImagesCtrl',['$scope','staticDataService','Upload','$stateParams','imageService','$http',function($scope,staticDataService,Upload,$stateParams,imageService,$http) {

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

       /* $scope.uploadFile = function() {
            $scope.myData = "";
            var fileUpload = dropzone.files[0];

           $http.jsonp('http://localhost:90/UploadImg/phpflickr/phpFlickr-2.2.0/auth.php').then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });*/

            /*    $http.jsonp("http://localhost:90/UploadImg/phpflickr/phpFlickr-2.2.0/auth.php")
                .then(function(data){
                      alert(data);
            });.
                error(function(data, status, headers, config) {
                    var getCookie = function(name) {
                        var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
                        if (match) return match[1];
                    };
                    $scope.test = getCookie("location");
                    if($scope.test === "" || $scope.test === undefined){
                        alert("There is some problem with upload image. please try again");
                    }
                    document.cookie = "location=;"

                });*/

           // Y.jsonp("http://localhost:90/UploadImg/phpflickr/phpFlickr-2.2.0/auth.php")
           //data['file'] = dropzone.files[0];
           /* $.ajax({
                url: 'http://localhost:90/UploadImg/phpflickr/phpFlickr-2.2.0/auth.php',
                type: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                success: function(data){
                    //On ajax success do this
                    $scope.myData = data;
                    $.post(data, {}, function(response, status, request) {
                        if (status == STATUS.REDIRECT) {
                            // you need to return the redirect url
                            location.href = response.redirectUrl;
                        } else {
                            $('#content').html(request.responseText);
                        }
                    });
                }
            });*/



        $scope.reset = function() {
            $scope.resetDropzone();
        };

        var init = function(){

        };

        init();

    }]);

