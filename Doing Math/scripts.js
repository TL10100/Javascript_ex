var age = prompt("How old are you?");
var secondPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a Day");
var yearsAlive = secondsPerDay * daysPerWeek * weeksPerYear * age;
document.write("I've been alive for more than " + yearsAlive + " seconds.");