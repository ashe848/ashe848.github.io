//clicking the check button before the page is fully loaded will have no response

window.onload = start;

function start() {
	document.getElementById('checkbutton').onclick = check;
	document.getElementById('clearbutton').onclick = clear;
}

function check() {
	var radio = document.getElementById("quiz").getElementsByTagName("input");
	var correct = 0;
	var incorrect = 0; 

	for(var i=0, len=radio.length ; i<len ; i++) {
		if(radio[i].value == "t") {
			if(radio[i].checked == true){
				correct++;
				radio[i].parentNode.parentNode.className = 'green';
			} else{
				incorrect++;
				radio[i].parentNode.parentNode.className = 'red';
			}
		}
	} 
	
	var percent = (correct/(correct+incorrect)*100).toFixed(1);
	document.getElementById("result").innerHTML = 'Number of Questions Correct: '+ correct +'<br/>Number of Questions Incorrect: ' + incorrect +'<br/>Percentage Correct: ' + percent +'%<br/>Click the Clear button to try again';
}

function clear(){
	var radio = document.getElementById("quiz").getElementsByTagName("input");
	
	for(var i=0, len=radio.length ; i<len ; i++) {
		radio[i].checked = false;
		
		if (radio[i].value == "t"){
			radio[i].parentNode.parentNode.className = '';
		}
	}
	
	document.getElementById("result").innerHTML = '';
}