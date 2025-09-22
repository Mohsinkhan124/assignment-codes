//                                   CHAPTER NUMBER 31 - 35
//                                DATE METHODS





// Q1

// var date = new Date();
// console.log(date);



// Q2


// var date = new Date();

// var arrmonth = [
//     "January", "February", "March", "April", "May", "June", "July", "Augest",
//     "September", "October", "November", "December"
// ];

// alert("Current Month: " + arrmonth[date.getMonth()]);



// Q3

// var date = new Date();

// var daysarray = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ];


// alert("Today is: " + daysarray[date.getDay()].slice(0, 3));




// Q4


// var date = new Date();

// var daysarray = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ];

// if(daysarray[date.getDay()] == "Saturday" || daysarray[date.getDay()] == "Sunday") {
//     console.log("It's Fun Day");
// } else {
//     console.log("It's Not Fun Day");
// }



// Q5

// var date = new Date();

// if(date < 16) {
//    console.log("First fifteen days of the month");
// }  else {
//     console.log("Last days of the month");
// }




// Q6

// var date = new Date();
// var milliSeconds = date.getTime();
// var minutes = milliSeconds / (1000 * 60);


// document.write("Current Date: ", date, "<br>");
// document.write("Elapsed milliseconds since Jan 1, 1970: ", milliSeconds, "<br>");
// document.write("Elapsed minutes since Jan 1, 1970: ", minutes);




// Q7


// var date = new Date();

// if(date <h1 12) {
//    alert("It's AM");
// } else {
//     alert("It's PM");
// }



// Q8


// var letterdate = new Date(2020, 11, 31);

// console.log(letterdate);





// Q9

// var ramadan = new Date("Mar 1 2025").getTime();
// var currenMilliSeconds = new Date().getTime();

// var mainas = currenMilliSeconds - ramadan;

// var month = Math.round(mainas / (1000 * 60 * 60 * 24));

// console.log(month + " Days have passed since 1st Ramadan, 2025");




// Q10

// var currentime = new Date();
// var beggintime = new Date(2015, 0, 1);

// var beginmilli = beggintime.getTime();

// var diff = currentime - beginmilli;

// var secconvert = Math.floor(diff / 1000);

// document.write("On reference date " + currentime + "<br>");
// document.write(secconvert + " seconds has passed since beggining of 2015");




// Q11

// var date = new Date();
// var currentime = new Date();

// var hours = currentime.getHours();

// currentime.setHours(hours - 1);


// document.write("Current date: " + date + "<br>");
// document.write("1 hour ago, it was: " + currentime);




//  Q12

// var date = new Date();
// var currentime = new Date();

// currentime.setFullYear(1925);


// document.write("Current date: " + date + "<br>");
// document.write("100 years back, it was: " + currentime);



// Q13 

// var user = prompt("Your age is");
// var date = new Date();
// date.setFullYear(2006);

// document.write("My Age is " + user + "<br>");
// document.write(date.getFullYear(2006));




// Q14

// var date = new Date();
// var coustumer = "farooq customer";

// var arrmonth = [
//     "January", "February", "March", "April", "May", "June", "July", "Augest",
//     "September", "October", "November", "December"
// ];

// var num_Unit = 410;
// var charge_unit = 16;
// var late_charge = 350;

// var total_unit = num_Unit * charge_unit;
// var late_plus = total_unit + late_charge;



// document.write("<h1>K-Electric Bill</h1><br>");
// document.write("Customer Name: " + coustumer + "<br>");
// document.write("Month: " + arrmonth[date.getMonth()] + "<br>");
// document.write("Number of units: " + num_Unit + "<br>");
// document.write("Charge per unite: " + charge_unit + "<br><br><br>");

// document.write("Net Amount Payable (within Due Date): " + total_unit + "<br>");
// document.write("Late Payment surcharge: " + late_charge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + late_plus + "<br>");







