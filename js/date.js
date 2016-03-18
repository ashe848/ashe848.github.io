var date=new Date()
var year=date.getYear()

if (year<1000)
	year+=1900

var weekday=date.getDay()
var month=date.getMonth()
var day=date.getDate()
var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")

document.write(dayarray[weekday]+", "+day+" "+montharray[month]+" "+year)
