angular.module('myApp.controllers.main')
    .controller('contactUsCtrl',['$scope','$http','$translate',
                         function($scope , $http , $translate){
    	$scope.displayMessage="";
		$scope.displayMessageError=false;
    	
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
	                	$scope.displayMessage=$translate.instant('Menu.ContactUsContent.MessageGood');
	            		$scope.displayMessageError=false;
	                },
	                error: function(data){
	                	$scope.displayMessage=$translate.instant('Menu.ContactUsContent.MessageBad');
	            		$scope.displayMessageError=true;
	                }	
	        });
	        
	        //prevent Default functionality
	        e.preventDefault();
		});
    	
    	$scope.send = function(){
    		var htmlBody = '<div>Name: ' + $scope.full_name + '</div>' +
			               '<div>Email: ' + $scope.email + '</div>' +
			               '<div>Message: ' + $scope.message + '</div>' +
			               '<div>Date: ' + (new Date()).toString() + '</div>';
	
    		$('#contactForm').submit();
    	};
}]);