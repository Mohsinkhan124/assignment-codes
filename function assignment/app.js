//                       Function,  Switch Statment, and while ... do while loop



// Q1

// function alldate() {
//     var date =  new Date();
//     document.write(date);
// }

// alldate();




// Q2

// function UfullN() {
//     var firstname = prompt("Enter Your first name: ");
//     var lastname = prompt("Enter Your Last name: ");

//     var fullname = firstname + " " + lastname;

//     document.write("Wellcome, " + fullname);
// }

// UfullN();



// Q3

// function sum() {
//     var num1 = parseInt(prompt("Enter first number: "));
//     var num2 = parseInt(prompt("Enter second number: "));
//     var total_add = num1 + num2;

//     return total_add;
// }

// var res = sum();
// alert("The sum is: " + res);



// Q4

// function calculate(num1, num2, operator) {

//     var res;

//     if (operator == "+") {
//         res = num1 + num2;
//     } else if (operator == "-") {
//         res = num1 - num2;
//     } else if (operator == "*") {
//         res = num1 * num2;
//     } else if (operator == "/") {
//         res = num1 / num2;
//     } else if (operator == "%") {
//         res = num1 % num2;
//     } else {
//         alert("* / + - % yahi chezey result deka ta hai");
//     }

//     return res;
// }

// num1 = +prompt("This is a calculate<br> Enter First Number:");
// num2 = +prompt("Enter Second Number:");
// operator = prompt("Chooce Operatos + - * / %:");

// var result = calculate(num1, num2, operator);
// document.write("Result: " + result);



// Q5

// function square(user) {
//      return user * user;
// }

// var user = +prompt("First number by answer square: ");

// var result = square(user);
// document.write("Result: " + result);



//  Q6

// function factorial(num) {
//     var fact = 1;

//     for(var i = 1; i <= num; i++) {
//          fact = fact * i;
//     }

//     return fact;
// }

// var num = +prompt("Enter a number: ");

//  var result = factorial(num);
//  document.write("Factorial is: " + result);



// Q7

// function showcount(start, end) {

//      if(start <= end) {
//         for(var i = start; i <= end; i++) {
//              document.write(i + "<br>")
//         }
//      } else {
//          for(var i = start; i >= end; i--) {
//              document.write(i + "<br>")
//         }
//      }
// }

// var start = +prompt("Enter a start number: ");
// var end = +prompt("Enter a last number");

// showcount(start, end);




// Q8


// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(num) {
//         return num * num;
//     }

//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));

//     return hypotenuse;
// }

// var base = +prompt("Enter base of triangle: ");
// var perpendicular = +prompt("Enter perpendicular of triangle: ");

// var result = calculateHypotenuse(base, perpendicular);
// document.write("Hypotenuse is: " + result);



// Q9

// function calculatearea(width, height) {
//      var area = width * height;
//      return area;
//     }


// // i  arguments as value
// var result2 = calculatearea(4, 5);
// document.write("Area (value): " + result2 + "<br>");


// // ii arguments as variables
// var width = 7;
// var height = 3;

// var result2 = calculatearea(width, height);
// document.write("Area (variables): " + result2);




// Q10

// var user;

// function palindrome() {
//       user = prompt("Enter a words / answer palindrome yes/not").toLowerCase();

//       var rev = user.split("").reverse().join("");

//       if(user === rev) {
//         document.write(user, " is a palindrome words");
//       } else {
//          document.write(user, " is not a palindrome words");
//       }
// }

// palindrome();



// Q11

// function uppercase(user) {

//     var arr = user.split(" ");

//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//     }
//      return arr.join(" ");

// }

// var user = prompt("Enter a sentence: ").toLowerCase();

// var result = uppercase(user);
// document.write("Example String: " + user + "<br>");
// document.write("Expected Output: " + result);



// Q12

// function bigword(str) {

//     var arr = str.split(" ");
//     var longest = "";

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) {
//             longest = arr[i];
//         }
//     }

//     return longest;
// }

// var user = prompt("Enter a sentence: ").toLowerCase();

// var result = bigword(user);
// document.write("Example String: " + user + "<br>");
// document.write("Longest Word: " + result);




// Q13

// function countletter(a, let) {
//     var count = 0;

//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === let) {
//             count++;
//         }
//     }

//     return count;
// }

// var result = countletter("JSResourceS.com", "o");

// document.write("Example String: JSResourceS.com<br>");
// document.write("Character Count: " + result);



// Q14


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




// End with Function, and start with  Switch Statment, and while ... do while loop



// Q1

// function pow(a, b) {

//     var power = Math.pow(a, b);
//     document.write("The power of " + a + " to " + b + " is: " + power);
// }

// pow(4, 3);



// Q2

// function leapyear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         document.write(year + " is a leap year.<br>");
//     } else {
//         document.write(year + " is not a leap year.<br>");
//     }
// }

// leapyear(2020);
// leapyear(2021);
// leapyear(1900);
// leapyear(2000);



// Q3

// function calculateS(a, b, c) {
//     var s = (a + b + c) / 2;
//     return s;
// }

// function calculateArea(a, b, c) {
//     var s = calculateS(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// var a = +prompt("FIrst number");
// var b = +prompt("Second number");
// var c = +prompt("third number");

// var area = calculateArea(a, b, c);
// document.write("The area of the triangle is: " + area.toFixed(2));



// Q4

// function main() {
//     var m1 = +prompt("english your marks");
//     var m2 = +prompt("math your marks");
//     var m3 = +prompt("urdu your marks");

//     var ave = averageFunction(m1, m2, m3);
//     var per = percentage(m1, m2, m3);

//     document.write("Average Marks: " + ave + "<br>");
//     document.write("Percentage: " + per + "%");

// }

// function averageFunction(m1, m2, m3) {
//      var total = (m1 + m2 + m3) / 3;
//      return total;
// }

// function percentage (m1, m2, m3) {
//      var totalmarks = 300;
//      var obtained = m1 + m2 + m3;
//      var percentage = (obtained / totalmarks) * 100;
//      return percentage;
// }

// main();



// Q5

// function indexof(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// var result = indexof("Hello, world!", "o");
// document.write("Example String: Hello, world!<br>");
// document.write("Character Index: " + result);
// var result2 = indexof("Hello, world!", "z");
// document.write("<br>Character Index: " + result2);



// Q6

// function vowel(sentence) {
//       var vowel = "aeiouAEIOU";
//       var result = "";

//       for(var i = 0; i < sentence.length; i++) {
//            if(vowel.indexOf(sentence[i]) === -1) {
//                 result = result + sentence[i];
//            }
//       }

//       return result;
// }

// var input = prompt("Enter a sentence (max 25 chars):");

// var output = vowel(input);
// document.write("Original Sentence: " + input + "<br>");
// document.write("Without Vowels: " + output);



// Q7

// function countDoubleVowels(text) {
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var ch = text[i].toLowerCase();
//         var next = text[i + 1].toLowerCase();

//         switch (ch) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 if ("aeiou".indexOf(next) !== -1) {
//                     count++;
//                 }
//                 break;
//         }
//     }

//     return count;
// }

// var sentence = "Pleases read this application and give me gratuity";
// var result = countDoubleVowels(sentence);

// document.write("Sentence: " + sentence + "<br>");
// document.write("Number of double vowels: " + result);


// Q8

// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// var km = +prompt("Enter distance between two cities in kilometers:");

// document.write("Distance in Kilometers: " + km + " km<br>");
// document.write("Distance in Meters: " + toMeters(km) + " m<br>");
// document.write("Distance in Feet: " + toFeet(km).toFixed(2) + " ft<br>");
// document.write("Distance in Inches: " + toInches(km).toFixed(2) + " in<br>");
// document.write("Distance in Centimeters: " + toCentimeters(km) + " cm<br>");



// Q9

// function calculateOvertime(hoursWorked) {
//     var overtimePay = 0;

//     if (hoursWorked > 40) {
//         var overtimeHours = hoursWorked - 40;
//         overtimePay = overtimeHours * 12;
//     }

//     return overtimePay;
// }

// var hours = +prompt("Enter total hours worked by employee:");
// var pay = calculateOvertime(hours);

// document.write("Total Hours Worked: " + hours + "<br>");
// document.write("Overtime Pay: Rs. " + pay);



// Q10

// function withdraw(amount) {
//     var note100 = 0, note50 = 0, note10 = 0;

//     note100 = Math.floor(amount / 100);
//     amount = amount % 100;

//     note50 = Math.floor(amount / 50);
//     amount = amount % 50;

//     note10 = Math.floor(amount / 10);
//     amount = amount % 10;

//     document.write("100 notes: " + note100 + "<br>");
//     document.write("50 notes: " + note50 + "<br>");
//     document.write("10 notes: " + note10 + "<br>");
// }

// var amt = +prompt("Enter amount to withdraw (multiple of 100):");
// withdraw(amt);

