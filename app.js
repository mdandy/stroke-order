function enterInput() {
	var character = document.getElementById("character").value;
	var url = getStrokeOrderUrl(character);
	setIframeUrl(url);
}

function getStrokeOrderUrl(character) {
	return "http://www.chinesehideout.com/tools/strokeorder.php?c=" + character;
}

function setIframeUrl(url) {
	document.getElementById("iframe").src = url;
}