function show(){
	var today=new Date()
	var hours=today.getHours()
	var minutes=today.getMinutes()
	var seconds=today.getSeconds()
	var meridiem="AM" 

	if (hours==12&&minutes==0&&seconds==0){
		meridiem="" //no meridiem (AM/PM) when it's 12 o'clock
		hours=hours-12
	}

	if (hours>=12){
		meridiem="PM"
		hours=hours-12
	}

	if (hours==0)
		hours=12

	if (hours<=9)
		hours="0"+hours //add zero in front of numbers less than 10

	if (minutes<=9)
		minutes="0"+minutes //add zero in front of numbers less than 10

	if (seconds<=9)
		seconds="0"+seconds //add zero in front of numbers less than 10

	document.clock.time.value="It is currently "+hours+":"+minutes+":"+seconds+" "+meridiem+" on"
	setTimeout("show()",1000)
}

show()