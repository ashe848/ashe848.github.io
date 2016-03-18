//sometimes doesn't work smoothly until the second cycle

var images = [
	'images/1.png',
	'images/2.png',
	'images/3.jpg',
	'images/4.jpg',
	'images/5.jpg',
	'images/6.jpg',],
	curIndex = 0;
	duration = 5000;
	
function slideshow() {
	document.getElementById('slideshow').className += "fadeOut";
	
	setTimeout(function() {
		document.getElementById('slideshow').src = images[curIndex];
		document.getElementById('slideshow').className = "";
	},1500);
	
	curIndex++;
	
	if (curIndex == images.length) { 
		curIndex = 0; 
	}
	
	setTimeout(slideshow, duration);
}

slideshow();