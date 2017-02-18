(function() {
	var numbers = [5,2,1,299,92,2400];
	var max = numbers[0];
	
	for (var i = 0;i < numbers.length;i++) {
		if (max < numbers[i]) {
			max = numbers[i];
		}
		
	}

	console.log(max);
	return max;

})();



