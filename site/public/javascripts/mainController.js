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
      if ($scope.user) {
        $scope.greetings = "Welcome " + $scope.user.nick;
        $scope.nameInput = $scope.user.nick;
      }
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
	


    $scope.register = function() {
	   var encrpytedText = CryptoJS.AES.encrypt($scope.registerPassword, "TheC!tySecret");
	   var hashedPassword = encrpytedText.toString();
		
      var newUser = {
        username: $scope.registerUsername,
        password: $scope.registerPassword,
      }
      $http.post('auth/register',newUser)
        .then(function(success) {
		  newUser.password = hashedPassword;
          $http.post('/users/register', {user:newUser}).then(function(callback) {
			window.location="/";
		  })
        })
    }

    $scope.login = function() {
      $http.post("auth/login", {
        username: $scope.username,
        password: $scope.password
      }).then(function(success, err) {
        $http.get('/auth/user').then(function(callback) {
          $scope.user = callback.data.user;
          if ($scope.user) {
            $scope.greetings = "Welcome " + $scope.user.nick;
            $scope.nameInput = $scope.user.nick;
          }
        })
      })
    }
  })
