var chars = ["A","B","C","D","E","F"];
for (i = 0; i < chars.length; i++) {
	var a = chars[i] % 2;
	if (a != 0) {
		chars.splice(i,1);
	}
}
document.write(chars);