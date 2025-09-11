//                 ARRAY CHAPTER



// Q1)


// var student = [];

// student[0, 1, 2] = 'mohisn', 'ahmed', 'ali';
// // console.log(student);



// Q2)

// var student = new Array();



// Q3)

// var names = ['mohsin','ali','ahmed'];


// Q4)

// var names = [1, 2, 3, 4, 5];


// Q5)

// var abc = [true, false, false, true];


// Q6)

// var mix_array = ['mohsin', true, 804, false];


// Q7)

// var Quali = [
//     "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"
// ];

// document.write("<h1>Qualifications: </h1>");

// document.write("1) " + Quali[0] + "<br>");
// document.write("2) " + Quali[1] + "<br>");
// document.write("3) " + Quali[2] + "<br>");
// document.write("4) " + Quali[3] + "<br>");
// document.write("5) " + Quali[4] + "<br>");
// document.write("6) " + Quali[5] + "<br>");
// document.write("7) " + Quali[6] + "<br>");
// document.write("8) " + Quali[7] + "<br>");



// Q8)

// var names = ['Ahmed', 'ali', 'farooq'];
// var scores = [380, 410, 454];
// var total_marks = 500;

// var ahmed_percentage = (scores[0] / total_marks) * 100;
// var ali_percentage = (scores[1] / total_marks) * 100;
// var farooq_percentage = (scores[2] / total_marks) * 100;

// document.write("Score of " + names[0] + " is " + scores[0] + ". Percentage: " + ahmed_percentage + "%<br>");
// document.write("Score of " + names[1] + " is " + scores[1] + ". Percentage: " + ali_percentage + "%<br>");
// document.write("Score of " + names[2] + " is " + scores[2] + ". Percentage: " + farooq_percentage + "%<br>");



// Q9)

// var colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'brown', 'purple'];

// A.

// var user = prompt("Enter a color to add at the beginning: ");

// colors.unshift(user);

// document.write(colors[0] + "<br>", colors[1] + "<br>", colors[2] + "<br>", colors[3] + "<br>", colors[4] + "<br>", colors[5] + "<br>", colors[6] + "<br>", colors[7] + "<br>", colors[8] + "<br>");


// B.

// var user = prompt("Enter a color to add at the end:");

// colors.push(user);

// document.write(colors[0] + "<br>", colors[1] + "<br>", colors[2] + "<br>", colors[3] + "<br>", colors[4] + "<br>", colors[5] + "<br>", colors[6] + "<br>", colors[7] + "<br>", colors[8] + "<br>");


// C.

// colors.unshift("Ornage", "pink");

//  document.write(colors[0] + "<br>", colors[1] + "<br>", colors[2] + "<br>", colors[3] + "<br>", colors[4] + "<br>", colors[5] + "<br>", colors[6] + "<br>", colors[7] + "<br>", colors[8] + "<br>", colors[9] + "<br>");


// D.

// colors.shift();

// document.write(colors[0] + "<br>", colors[1] + "<br>", colors[2] + "<br>", colors[3] + "<br>", colors[4] + "<br>", colors[5] + "<br>", colors[6] + "<br>", colors[7] + "<br>");


// E.


// colors.pop();

// document.write(colors[0] + "<br>", colors[1] + "<br>", colors[2] + "<br>", colors[3] + "<br>", colors[4] + "<br>", colors[5] + "<br>", colors[6] + "<br>", colors[7] + "<br>");



// F.

// var user = +prompt("he wants to add a color");
// var col_name = prompt("Color name");


// colors.splice(user, 0, col_name);

// document.write(colors);





// Q10)


// var score = [320, 230, 480, 120];

// document.write("Score of Students: " + score + "<br>");

// score.sort(function(a, b) {
//     return a - b;
// });

// document.write("Ordered Score of Students: " + score);



// Q11)


// var city = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawar'];

// document.write('Cities list: <br>' + city + "<br>");

// var selected = city.slice(2, 4);

// document.write("Selected Cities: <br>" + selected);



// Q12)


// var abc = ["this", "is", "my", "cat"];

// document.write("Array: <br> " + abc + "<br>");

// var single_string = abc.join(" ");

// document.write("String: <br> " + single_string);




// Q13)


// var devices = [];

// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Moniter");

// document.write("Devices: <br> " + devices + "<br><br>");

// var firstOut = devices.shift();
// document.write("Out: <br> " + firstOut + "<br>");

// var firstOut = devices.shift();
// document.write("Out: <br> " + firstOut + "<br>");

// var firstOut = devices.shift();
// document.write("Out: <br> " + firstOut + "<br>");

// var firstOut = devices.shift();
// document.write("Out: <br> " + firstOut + "<br>");



// Q14)


// var devices = [];

// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Moniter");

// document.write("Devices: <br> " + devices + "<br><br>");

// var firstOut = devices.pop();
// document.write("Out: <br> " + firstOut + "<br>");

// var firstOut = devices.pop();
// document.write("Out: <br> " + firstOut + "<br>");

// var firstOut = devices.pop();
// document.write("Out: <br> " + firstOut + "<br>");

// var firstOut = devices.pop();
// document.write("Out: <br> " + firstOut + "<br>");



// Q15)


// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// document.write("<select>");
// document.write(`<option> ${manufacturers[0]} </option>`);
// document.write(`<option> ${manufacturers[1]} </option>`);
// document.write(`<option> ${manufacturers[2]} </option>`);
// document.write(`<option> ${manufacturers[3]} </option>`);
// document.write(`<option> ${manufacturers[4]} </option>`);
// document.write(`<option> ${manufacturers[4]} </option>`);
