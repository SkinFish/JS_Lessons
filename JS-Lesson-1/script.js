function changeName() {
	console.log("Site is loaded.... Welcome");

	var nameInput = prompt("What is your name?");
	document.getElementById('welcomeText').innerHTML = "Hello, " + nameInput + "!";
}

function randInteger(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
