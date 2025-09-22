//                                   CHAPTER NUMBER 31 - 34
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





//                     CHAPTER NUMBER 35 - 38
//                    FUNCTIONS



// Q1)

// function alldate() {
//     var date =  new Date();
//     document.write(date);
// }

// alldate();



// Q2)

// function UfullN() {
//     var firstname = prompt("Enter Your first name: ");
//     var lastname = prompt("Enter Your Last name: ");

//     var fullname = firstname + " " + lastname;

//     document.write("Wellcome, " + fullname);
// }

// UfullN();



// Q3)

// function sum() {
//     var num1 = parseInt(prompt("Enter first number: "));
//     var num2 = parseInt(prompt("Enter second number: "));
//     var total_add = num1 + num2;

//     return total_add;
// }

// var res = sum();
// alert("The sum is: " + res);



// Q4)

// function calculate() {

//     var num1 = +prompt("This is a calculate<br> Enter First Number:");
//     var num2 = +prompt("Enter Second Number:");
//     var num3 = prompt("Chooce Operatos + - * / %:");

//     var res;

//     if (num3 == "+") {
//          res = num1 + num2;
//     } else if (num3 == "-") {
//          res = num1 - num2;
//     } else if (num3 == "*") {
//          res = num1 * num2;
//     } else if (num3 == "/") {
//          res = num1 / num2;
//     } else if (num3 == "%") {
//          res = num1 % num2;
//     } else {
//         alert("* / + - % yahi chezey result deka ta hai");
//     }

//     return res;

// }

// var result = calculate();
// document.write("Result: " + result);



// Q5)

// function square() {
//     var a = 3;

//     var res
//     res  = a * a;

//     return res;
// }

// var result = square();
// console.log(result);



// Q6)

// function factorial() {
//     var num = +prompt("Enter a number: ");
//     var fact = 1;

//     for (var i = num; i >= 1; i--) {
//         fact = fact * i;
//     }

//     return fact;
// }

// var result = factorial();
// document.write("Factorial is: " + result);



// Q7)

// function showcount() {
//     var start = +prompt("Enter Start Number: ");
//     var end = +prompt("Enter End Number: ");

//     if (start < end) {
//         for (var i = start; i < end; i++) {
//             document.write(i + "<br>")
//         }
//     } else {
//         for (var i = start; i > end; i--) {
//             document.write(i + "<br>")
//         }
//     }
// }

// showcount();


// Q8)

// function calculateArea(width, height) {
//     let area = width * height;
//     return area;
// }

// // i. Arguments as values (direct numbers)
// let result1 = calculateArea(5, 10);
// document.write("Area (values): " + result1 + "<br>");

// // ii. Arguments as variables
// let w = 7;
// let h = 12;
// let result2 = calculateArea(w, h);
// document.write("Area (variables): " + result2);



// Q9)

// function palindrome() {
//     var user = prompt("Enter a word: ").toLowerCase();

//     var reverse = user.split("").reverse().join("");

//     if(user === reverse) {
//         document.write(user, " is a palindrome words");
//     } else {
//         document.write(user, " is not a palindrome words");
//     }

// }

// palindrome();


// Q10)

// var user;

// function uppercase() {
//     user = prompt("Enter a sentence: ").toLowerCase();

//     var arr = user.split(" ");

//     for(var i = 0; i < arr.length; i++) {
//          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }

//     return arr.join(" ");
// }

// var result = uppercase();
// document.write("Example String: " + user + "<br>");
// document.write("Expected Output: " + result);



// Q11)

// function longest() {
//     var user = prompt("Enter a sentence: ").toLowerCase();

//     var arr = user.split(" ");
//     var longest = "";

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) {
//             longest = arr[i];
//         }
//     }

//     document.write("Example String: " + user + "<br>");
//     document.write("Longest Word: " + longest);
// }

// longest();




// Q12)


// var user;
// var char
// var count;

// function charcount() {

//     user = prompt("Enter a sentence: ").toLowerCase();
//     char = prompt("Enter a character to find: ").toLowerCase();

//     count = 0;

//     for (var i = 0; i < user.length; i++) {
//         if (user[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }


// charcount();
// document.write("Example String: " + user + "<br>");
// document.write("Character Count: " + count);




// Q13)

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     return circumference.toFixed(2);
// }

// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     return area.toFixed(2);
// }

// var radius = parseFloat(prompt("Enter the radius of the circle:"));
// var circumference = calcCircumference(radius);
// var area = calcArea(radius);
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

