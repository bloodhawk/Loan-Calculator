var app = angular.module('loancalc');
app.service('bankService', function($http, $q){
	this.getInterestRate = function(){
		var defer = $q.defer();
		$http.get('http://localhost:8500/interest_rate').then(function(data){
			var rate = data.data;
			defer.resolve(rate);
		});
		return defer.promise;
	};
});