

//                               USER INPUT & CONDITIONAL STATEMENT


//    CHAPTER NUMBER 9 - 11

// 1)

// var user = prompt("What is your city name").toLowerCase();

// if (user == "karachi") {
//      document.write("<h1> Welcome to city of lights</h1>")
// }  else {
//     document.write("Welcome to " + user);
// }


// 2)


// var user = prompt("Are you female ya male").toLowerCase();;

// if (user == "male") {
//      document.write("<h1>  Good Morning Sir</h1>")
// }  else if(user == "female") {
//      document.write("<h1> Good Morning Ma’am</h1>")
// } else {
//      document.write("<h1> Bacho ka kaam nahi he Baita</h1>")
// }



// 3)

// var user = prompt("What is the color of the traffic signal?").toLowerCase();

// if(user == "red") {
//    document.write("<h1> Must Stop</h1>");
// }  else if (user == "yellow") {
//    document.write("<h1> Ready to move</h1>");
// } else if(user == "green") {
//    document.write("<h1> Move now</h1>");
// } else {
//      document.write("<h1> Wese Ap Gadha Gari chala rahey hu ya kuch Aur</h1>");
// }



// 4)


// var fuel = +prompt("Enter remaining fuel in your car (in litres):");

// if (fuel < 0.25) {
//     document.write("<h1>Please refill the fuel in your car</h1>");
// } else {
//     document.write("<h1>Your car has enough fuel, no worries!</h1>");
// }



// 5)

// a.

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// b.

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is false");
// }


// c. 


//  var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// } else {
//      alert("condition 1 is false");
// }
// if (c === 13){
// alert("condition 2 is true");
// } else {
//     alert("condition 2 is false");
// }
// if (++c < 14){
// alert("condition 3 is true");
// } else {
//     alert("condition 3 is false");
// }
// if(c === 14){
// alert("condition 4 is true");
// } else {
//     alert("condition 4 is false");
// }


// d.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } else {
//     alert("The cost not equals");
// }



// e.

// if (true){
// alert("True");
// }

// alert chalega
 
// if (false){
// alert("False");
// }

// nahi chalega




// f.

// if("car" <h1 "cat"){
//     alert("car is smaller than cat");
// }



// 6)

// var eng = +prompt("Your English Marks");
// var urdu = +prompt("Your Urdu Marks");
// var math = +prompt("Your  Marks");

// var res = eng + urdu + math;
// var totalMarks = 300;
// var percentage = (res / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1> <br>");
// document.write("Total Marks:" + totalMarks + "<br>");
// document.write("Marks Obtained: " + res + "<br>");

// if(percentage >= 80) {
//     document.write("Percentage: " + percentage + "% <br>");
//     document.write("Grade: A+ <br>");
// } else if (percentage >= 70) {
//      document.write("Percentage: " + percentage + "% <br>");
//     document.write("Grade: A <br>");
// } else if (percentage >= 60) {
//      document.write("Percentage: " + percentage + "% <br>");
//     document.write("Grade: B <br>");
// } else if (percentage >= 50) {
//      document.write("Percentage: " + percentage + "% <br>");
//     document.write("Grade: C <br>");
// } else if (percentage >= 40) {
//     document.write("Percentage: " + percentage + "% <br>");
//      document.write("Grade: Fail <br>");
// } else {
//      document.write("Grade: Fail <br>");
// }

// document.write("Remarks: You need to improve");


// 7)

// var secretNumber = 7;

// var guess = +prompt("Guess the secret number (between 1 and 10):");

// if(guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, try again!");
// }



// 8)

// var num = parseInt(prompt("Enter a number to check if it is divisible by 3:"));

// if (num % 3 === 0) {
//     alert(num + " is divisible by 3");
// } else {
//     alert(num + " is not divisible by 3");
// }



// 9)

// var num = +prompt("Enter a number to check if it is even or odd:");


// if(num % 2 === 0) {
//    alert(num + " is an Even number");
// } else {
//      alert(num + " is an Odd number");
// }



// 10)

// var temp = +prompt("What is the temperature outside?");

// if (temp > 40) {
//    document.write("<h1>“It is too hot outside</h1>");
// } else if (temp > 30) {
//       document.write("<h1>The Weather today is Normal.</h1>");
// } else if (temp > 20) {
//       document.write("<h1>Today’s Weather is cool.</h1>");
// } else if (temp > 10) {
//       document.write("<h1>OMG! Today’s weather is so Cool.</h1>");
// } else {
//     document.write("<h1>Jaldi Se Aag Laga Lo Warna Braf Hojayega</h1>");
// }



// 11)

// var first_number = +prompt("Enter A First Number");
// var second_number = +prompt("Enter A Second Number");
// var operation = prompt("Enter operation (+, -, *, /, %):");


// if(operation == "+") {
//     alert("Result: " + (first_number + second_number));
// } else if (operation == "-") {
//     alert("Result: " + (first_number - second_number));
// } else if (operation == "*") {
//     alert("Result: " + (first_number * second_number));
// } else if (operation == "/") {
//     alert("Result: " + (first_number / second_number));
// } else if (operation == "%") {
//     alert("Result: " + (first_number % second_number));
// } else {
//     document.write("<h1>Bro Calculater hai</h1>");
// }






//                             IF…ELSE & ELSE IF STATEMENT,
//                              TESTING SET OF CONDITIONS


//   CHAPTER NUMBER 11 - 13

// 1)
 

// var char = prompt("Enter any character (number or letter):");
// var code = char.charCodeAt(0);

// if (code >= 48 && code <= 57) {
//     document.write("<h2>Input is a Number.</h2>");
// } else if (code >= 65 && code <= 90) {
//     document.write("<h2>Input is an Uppercase Letter.</h2>");
// } else if (code >= 97 && code <= 122) {
//     document.write("<h2>Input is a Lowercase Letter.</h2>");
// } else {
//     document.write("<h2>Input is not a Number or Letter.</h2>");
// }


// 2)

// var num1 = +prompt("First Number");
// var num2 = +prompt("Second Number");

// if (num1 > num2) {
//      document.write(num1 + " <h2>is Larger</h2>");
// } else if (num1 < num2) {
//     document.write(num2 + " <h2>is Larger</h2>");
// } else if (num1 === num2) {
//      document.write("<h2>Both numbers are equal</h2>");
// } else {
//     alert("Please enter valid numbers");
// }



// 3)

// var user = +prompt("Enter Number");

// if(user > 0) {
//    document.write("<h2>the number is positive</h2>");
// } else if (user < 0) {
//     document.write("<h2>the number is negative</h2>");
// }  else if (user === 0) {
//   document.write("<h2>the number is zero</h2>");
// } else {
//      alert("Please enter valid numbers");
// }


// 4)

// var vowel = prompt("i.e. string of length 1").toLowerCase();

// if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
//     document.write("<h2>This is a vowels word: True</h2>");
// } else {
//     document.write("<h2>This is a not vowels word: False</h2>");
// }



// 5)

// var pass = "12345"
// var user = prompt("Enter Your Password");

// if(user == pass) {
//   document.write("<h2>Correct! The password you entered matches the original password</h2>");
// } else if(!user) {
//    document.write("<h2>Please enter your password</h2>");
// } else {
//     alert("Incorrect password")
// }



// 6)

// var greeting;
// var hour = 13;
// if (hour < 18) {
//    alert(greeting = "Good day");
// } else {
//    alert( greeting = "Good evening");
// }




// 7)


var user = +prompt("Enter time in 24-hour format (e.g. 1900 for 7PM):");


if (user >= 0 && user <= 1200) {
     document.write("<h2>Good Morning User</h2>");
} else if (user >= 1200 && user <= 1700) {
     alert("Good Afternoon");
}  else if (user >= 1700 && user <= 2100) {
     alert("Good Evenin");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
} else {
    alert("Invalid time format! Please enter between 0000 to 2359.");
}