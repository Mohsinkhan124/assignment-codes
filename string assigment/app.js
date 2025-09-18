//                        CHAPTER NUMBER 21 - 25
//                    STRING METHODS



// 1)

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter Your last name");

// var totalname = firstname.concat(" ", lastname);
// document.write("Salamualaikum "  + totalname);



// 2)

// var user = prompt("Enter Your favorite mobile phone");
// var len = user.length;

// document.write("My favorite phone is: " + user + "<br>");
// document.write("Length of string: " + len);



// 3)

// var str = "Pakistani";

// var findn = str.indexOf("n");

// document.write("String: " + str + "<br>");
// document.write("Index of 'n': " + findn);



// 4)

// var str = "Hello World";

// var findl = str.lastIndexOf("l");

// document.write("String: " + str + "<br>");
// document.write("Index of 'l': " + findl);



// 5)

// var str = "Pakistani";

// var find3rd = str.indexOf("i");
// var copystr = str.charAt(find3rd);

// document.write("String: " + str + "<br>");
// document.write("Character at index " + find3rd + ": ", copystr);



// 6)

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter Your last name");

// var totalname = firstname.concat(" ", lastname);
// document.write("Salamualaikum "  + totalname);



// 7)

// var str = "Hyderabad";

// var replac = str.replace("Hyder", "Islam");

// document.write("City: ", str, "<br>");
// document.write("After Replacement: ", replac);



// 8)

// var str = "Ali and Sami are best friends. They play cricket and football together.";
// var repAll = str.replaceAll("and", "&");

// document.write(str, "<br><br><br>");
// document.write("After Replacement: ", repAll);



// 9)

// var str = "472";
// var num = parseFloat(str);

// document.write("Value: ", str, "<br>");
// document.write("Type: ", typeof str, "<br>");

// document.write("Value: ", num, "<br>");
// document.write("Type: ", typeof num, "<br>");



// 10)

// var user = prompt("Your favorite car name").toUpperCase();

// document.write("Upper Case: ", user);



// 11)
 
// var user = prompt("Your favorite skill name");
// var title = user.charAt(0).toUpperCase() + user.slice(1);

// document.write("User Input: ", user, "<br>");
// document.write("Title Case: ", title);



// 12)

// var num = 35.36;
// var convertstr = num.toString();
// var remdod = convertstr.replace(".", "");


// document.write("Number: ", num, "<br>");
// document.write("Result: ", remdod);



// 13)

// var user = prompt("Enter your username");


// if (user.includes("@") || user.includes(",") || user.includes(".") || user.includes("!")) {
//      alert("Please enter a valid username");
// } else {
//     alert("username is valid");
// }



// 14)

// var user = prompt("Wellcome to Beera Bakery. What do you want to order sir/ma'am?");

// var abc = ["cake", "apple pie", "cookie", "chips", "patties"];

// var searchitem = user.toLowerCase();
// var index = abc.indexOf(searchitem);


// if (index !== -1) {
//     document.write(user, " is available at index 2 in our bakery");
// } else {
//     document.write("We are sorry. ", user, " is not available in our bakery");
// }



// 15)

// var password = prompt("Enter your password");

// if (password.length < 6) {
//     alert("Password must be at least 6 characters long");
// } else if (!isNaN(password.charAt(0))) {
//     alert("Password should not start with a number");
// } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     alert("Password must contain both alphabets and numbers");
// } else {
//     alert("Valid password");
// }



// 16


// var university = "University of Karachi";

// var arr = university.split("");

// for(var i = 0; i < arr.length; i++) {
//      document.write(arr[i], "<br>");
// }



// 17

// var user = prompt("Your Country Name:");

// var findlast = user.charAt(user.length -1);

// document.write("User Input: ", user, "<br>");
// document.write("Last Character of input: ",findlast)



// 18

// var str = "The quick brown fox jumps over the lazy dog.";

// var lower = str.toLocaleLowerCase();
// var words = lower.split(" ");

// var count = 0;

// for(var i = 0; i < words.length; i++) {
//      if(words[i] === "the") {
//        count++;
//      }
// }

// document.write("Text: ", str, "<br>");
// document.write("There are ", count, " occurrence(s) of word 'the'");






//                      CHAPTER NUMBER 26 - 30
//                 MATH METHODS




// 1)

// a.

// var num = 3.45214;

// // b.

// var round = Math.round(num);

// // c.

// var flor = Math.floor(num);

// // d.

// var ceil = Math.ceil(num);


// document.write("Number: ", num, "<br>");
// document.write("round of value: ", round, "<br>");
// document.write("floor value: ", flor, "<br>");
// document.write("ceil value: ", ceil, "<br>");