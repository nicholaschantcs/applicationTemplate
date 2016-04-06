angular
  .module('mainApp', [])
  .service('appAPI', seneca.ng.web({
    prefix: '/api/'
  }))
  .service('appPubSub', seneca.ng.pubsub())
  .controller('mainCtrl', function($scope, $http, appAPI, appPubSub) {
    $scope.greetings = "Welcome";
    $scope.$watch('nameInput', function(newV, oldV) {
      if (newV != undefined)
        $scope.greetings = "Welcome " + newV;
    })
    $http.get('/auth/user').then(function(callback) {
      $scope.user = callback.data.user;
      if ($scope.user)
        $scope.greetings = "Welcome " + $scope.user.nick;
		$scope.nameInput = $scope.user.nick;
    })
    $scope.greetUser = function() {
      $http.post('/greetUsers', {
        user: $scope.nameInput
      }).success(function(response) {
        alert("callback from seneca service, check console for data.\n" + response);
      })
      appAPI.get('greet/greetUser?user=' + $scope.nameInput, function(data) {
        console.log(data);
      })
    }
    $scope.generateRandomNumber = function() {
      appAPI.get('number/displayRandomNumber', function(data) {
        $scope.randomNumber = data.data;
      })
    }
  })
