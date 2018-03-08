/*
1. Write a JavaScript program to display the current day and time in the following format.

Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/

/*var fullDate = new Date();
var hours = fullDate.getHours();
var minutes = fullDate.getMinutes();
var seconds = fullDate.getSeconds();
var dayOfTheWeek = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var amOrPm = morning(hours);
var standardTime = adjustedHours(hours);


function morning (time){
    var am;
    var pm;
    if (time < 12){
        am = "AM";
        return am;
    }  else {
        pm = "PM";
        return pm;
    }
    
}

function adjustedHours(time){
    if (time == 0) {
        time = 12;
        return time;
    } else {
        time = time - 12;
        return time;
    }
}

function one (){
    alert("Today is: " + dayOfTheWeek[fullDate.getDay()] + ".");
    alert("Current time is : " + standardTime + " " + amOrPm + " : " + minutes + " : " +seconds);
}*/

var obj = {
  foo: function() {
     console.log(this);
 
     function bar() {
         console.log(this);
     }
    bar();
  }
}
 

