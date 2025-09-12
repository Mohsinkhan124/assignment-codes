//                                       CHAPTER 17 - 20
//                                  ARRAYS AND LOOP





// Q1)


// var arr = [
//      [], []
// ];



// Q2)

 
//  var arr = [
//      [0, 1, 2, 3],
//      [1, 0, 1, 2],
//      [2, 1, 0, 1],
// ]


// console.log(arr);



// Q3)


// for(var i = 1; i <= 10; i++) {
//      document.write(i + "<br>");
// }



// Q4)


// var user = +prompt("Enter a number to show its multiplication table:");
// var range = +prompt("Enter Length multiplication table:");


// for(var i = 1; i <= range; i++) {
//     document.write(user, " x ", i, " = ", user * i, "<br>");
// }



// Q5)

// fruits = ["apple", "banana", "mango", "orange", "strawberry"];


// for(var i = 0; i < fruits.length; i++) {
//      document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


// Q6)

// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// A.

// document.write("<h1>Counting:</h1><br>");
// document.write(counting, "<br>");

// B.

// document.write("<h1>Reverse Counting:</h1><br>");
// counting.reverse();
// document.write(counting, "<br>");


// C.

// document.write("<h1>Even:</h1><br>");
// for(var i = 0; i < counting.length; i++) {
//    if(counting[i] % 2 === 0) {
//      document.write(counting[i], " ");
// }
// }

// D. 

// document.write("<h1>Odd:</h1><br>");
// for(var i = 0; i < counting.length; i++) {
//    if(counting[i] % 2 !== 0) {
//      document.write(counting[i], " ");
// }
// }


// E.

// document.write("<h1>Series:</h1><br>");
// for(var i = 0; i < counting.length; i++) {
//    if(counting[i] % 2 === 0) {
//      document.write(counting[i], "k ");
// }
// }



// Q7)


// var bakery = ["cake", "apple pie", "cookie", "chips", "patties", "milk", "pepsi", "chocalate", "super biscut"];


// var user = prompt("Wellcome to banear Bakery. What do you want to order sir/mam?");

// if(user == "cake" || user == "apple pie" || user == "cookie" || user == "chips" || user == "patties" || user == "milk" || user == "pepsi" || user == "chocalate" || user == "super biscut" ) {
//       document.write(user, " is available at index 2 in our bakery");
// } else {
//     document.write("We are sorry. " + user + " is not available in our bakery");
// }




// Q8)

// var A = [24, 53, 78, 91, 12];

// document.write("Array items: " + A + " <br>");

// var largest = A[0];

// for (var i = 0; i < A.length; i++) {
//     if(A[i] > largest) {
//        largest = A[i];
//     }
// }

// document.write("The largest number is: " + largest);



// Q9)

//  var A = [24, 53, 78, 91, 12];

//  document.write("Array items: " + A + " <br>");

//  var small = A[0];

//  for(var i = 0; i < A.length; i++) {
//     if(A[i] < small) {
//         small = A[i];
//     }
//  }

//  document.write("The small number is: " + small);


// Q10)

// var num = 5;

// for(var i = 1; i <= 20; i++) {
//     document.write(num * i + " ");
// }



//                                          Chapter End