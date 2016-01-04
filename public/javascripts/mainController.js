angular
	.module('mainApp',[])
	.service('appAPI', seneca.ng.web({prefix:'/api/'}))
	.service('appPubSub', seneca.ng.pubsub())
	.controller('mainCtrl',function($scope,$http,appAPI,appPubSub){

		$scope.greetings = "Welcome";
		$scope.$watch('nameInput',function(newV,oldV){
			if(newV != undefined)
			$scope.greetings = "Welcome " + newV;
		})

		$scope.greetUser = function(){
			appAPI.get('greet/greetUser?user=' + $scope.nameInput,function(data){
				alert("callback from seneca service, check console for data.\n" + data);
				console.log(data);
			})
		}

		$scope.generateRandomNumber = function(){
				appAPI.get('greet/displayRandomNumber',function(data){
					$scope.randomNumber =  data.data;
			})
		}
	})