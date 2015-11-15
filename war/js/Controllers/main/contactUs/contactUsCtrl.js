angular.module('myApp.controllers.main')
    .controller('contactUsCtrl',['$scope', '$http', function($scope, $http){

    	$scope.success = false;
    	$scope.error = false;
    	
		$('#contactForm').submit(function(e) {

	        //get the action-url of the form
	        var actionurl = e.currentTarget.action;

	        //do your own request an handle the results
	        $.ajax({
	                url: actionurl,
	                type: 'post',
	                dataType: 'json',
	                data: $('#contactForm').serialize(),
	                success: function(data) {
	                	$scope.success = true;
	                },
	                error: function(data){
	                	$scope.error = true;
	                }	
	        });
	        
	      //prevent Default functionality
	        e.preventDefault();
		});
    	
    	$scope.send = function(){
    		var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
			               '<div>Email: ' + $scope.user.email + '</div>' +
			               '<div>Message: ' + $scope.user.body + '</div>' +
			               '<div>Date: ' + (new Date()).toString() + '</div>';
	
    		/*$http({
			    //url: 'https://api.postmarkapp.com/email',
    			url: '//formspree.io/coachersir@gmail.com',
			    method: 'POST',
			    data: {
			      'From': 'foo@foo.com',
			      'To': 'bar@bar.com',
			      'HtmlBody': htmlBody,
			      'Subject': 'New Contact Form Submission'
			    },
			    headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
			    }
    		})
    		.success(function (data) {
    			$scope.success = true;
    			$scope.user = {};
    		})
    		.error(function (data) {
    			$scope.error = true;
    		});
    		});*/
    		$('#contactForm').submit();
    	};
}]);