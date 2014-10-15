var app = angular.module('loancalc');
app.controller('main', function($scope, bankService){
	bankService.getInterestRate().then(function(data){
		$scope.interest_rate = data;
	});

	$scope.calculatePayment = function(){
		var P = Number($scope.principal);
		var r = $scope.interest_rate/100;
		var N = 5;
		if(P && r && N){
			A = ((P * r * N) + P) / 48;
			$scope.monthly_payment = A.toFixed(2);
		} else {
			return;
		}	
	};
	
});