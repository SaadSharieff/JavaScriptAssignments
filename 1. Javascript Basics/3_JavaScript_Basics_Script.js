/*
3. Write a JavaScript program to get the current date.

Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/

function currentDate (){
    var dateToday = new Date();
    var month = dateToday.getMonth() + 1;
    console.log(dateToday.getDate());
    console.log(month);
    console.log(dateToday.getFullYear());
    document.getElementById("h1").innerHTML= month + "/" + dateToday.getDate() + "/" + dateToday.getFullYear();
    
    
}
