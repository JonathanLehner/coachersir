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
	
    		$('#contactForm').submit();
    	};
    	
//    	var input = document.getElementById('searchTextField');
//    	var options = {
//    	  types: ['(cities)'],
//    	  componentRestrictions: {country: 'il'}
//    	};
//
//    	autocomplete = new google.maps.places.Autocomplete(input, options);
}]);