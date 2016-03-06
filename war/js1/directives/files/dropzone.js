angular.module('myApp.directives')
    .directive('dropzone', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attrs) {

            var config = {
                maxFilesize: 100,
                paramName: "uploadfile",
                maxThumbnailFilesize: 10,
                acceptedFiles: "image/jpg, image/jpeg",
                parallelUploads: 1,
                autoProcessQueue: false
            };


            var eventHandlers = {
                'addedfile': function(file) {
                    scope.file = file;
                    if (this.files[1]!=null) {
                        this.removeFile(this.files[0]);
                    }
                    scope.$apply(function() {
                        scope.fileAdded = true;
                    });
                },
                'success': function (file, response) {
                }
            };

            dropzone = new Dropzone(element[0], config);

            angular.forEach(eventHandlers, function(handler, event) {
                dropzone.on(event, handler);

                dropzone.on("sending", function(file, xhr, data) {

                    // if file is actually a folder
                    if(file.fullPath){
                        data.append("fullPath", file.fullPath);
                    }
                });
            });

            scope.processDropzone = function() {
                dropzone.processQueue();
            };

            scope.resetDropzone = function() {
                dropzone.removeAllFiles();
            }
            
            scope.$on('$destroy', function(){
            	dropzone.removeAllFiles(true);
            });
        }
    }
});