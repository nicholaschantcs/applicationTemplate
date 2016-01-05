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
		
		var key = makeid();
	
		$scope.greetUser = function(){
			$http.post('/greetUsers',{data:$scope.nameInput}).success(function(response) {
//				alert("callback from seneca service, check console for data.\n" + response);
				console.log(response);
			})
			appAPI.get('greet/greetUser?key=' + key + '&user=' + $scope.nameInput,function(data){
//				alert("callback from seneca service, check console for data.\n" + data);
				console.log(data);
			})
		}

		$scope.generateRandomNumber = function(){
				appAPI.get('greet/displayRandomNumber',function(data){
					$scope.randomNumber =  data.data;
			})
		}
	})

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}