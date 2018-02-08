var to="exam day on Tuesday, 20th November!"
var current="Today is the day, good luck!"
var monthsarray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countdown(year,month,day){
	theyear=year;themonth=month;theday=day
	
	var today=new Date()
	var todayyear=today.getYear()
	
	if (todayyear<1000)
		todayyear+=1900
		
	var todaymonth=today.getMonth()
	var todaydate=today.getDate()
	var todayhour=today.getHours()
	var todaymin=today.getMinutes()
	var todaysec=today.getSeconds()
	
	var todaytime=todaydate+" "+monthsarray[todaymonth]+", "+todayyear+" "+todayhour+":"+todaymin+":"+todaysec
	var futuretime=day+" "+monthsarray[month-1]+", "+year
	
	difference=Date.parse(futuretime)-Date.parse(todaytime)
	days=Math.floor(difference/(60*60*1000*24)*1)
	hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1)
	mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
	secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)

	if(days==0&&hours==0&&mins==0&&secs==1){
		document.forms.count.countdown.value=current
		return
	}
	else
	document.forms.count.countdown.value="There are "+days+ " days, "+hours+" hours, "+mins+" minutes, and "+secs+" seconds left until "+to

	setTimeout("countdown(theyear,themonth,theday)",1000)
}

countdown(2018,11,20)
