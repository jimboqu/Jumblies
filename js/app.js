var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.sentence = "This is an example sentence"
	$scope.fake = "This is fake word"
	
	$scope.score = 0;
	senny = []
	$scope.senny = senny

	$scope.clickfunc = function(text, item) {
		if (text == item) {
			console.log("Correct"); $scope.score += 1;
		} else {console.log("False")}
		console.log(text, item)
	}
	


	$scope.funk = function() {
		prepline = []
		line = $scope.sentence;
		fake = $scope.fake;
		fake = fake.toLowerCase().replace(" ", "")
		line = line.toLowerCase().split(" ")
		line.push(fake);
		line = shuffle(line);
		prepline.push(line, fake);
		senny.push(prepline);
	
		console.log(senny[0]);
		

		//push fake line into sentence array

	}
	function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}



	
});


