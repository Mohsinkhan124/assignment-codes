//                      Chapter Event 43 - 52


// Q3

// function clearRow() {
//     document.getElementById("row").remove();
// }
// function clearRow1() {
//     document.getElementById("row1").remove();
// }
// function clearRow2() {
//     document.getElementById("row2").remove();
// }
// function clearRow3() {
//     document.getElementById("row3").remove();
// }
// function clearRow4() {
//     document.getElementById("row4").remove();
// }
// function clearRow5() {
//     document.getElementById("row5").remove();
// }
// function clearRow6() {
//     document.getElementById("row6").remove();
// }
// function clearRow7() {
//     document.getElementById("row7").remove();
// }
// function clearRow8() {
//     document.getElementById("row8").remove();
// }
// function clearRow9() {
//     document.getElementById("row9").remove();
// }
// function clearRow10() {
//     document.getElementById("row10").remove();
// }


// Q5

// var count = document.getElementById("count");
// var num = 0;

// function counter() {
//     num++;
//     count.innerText = num;
// }

// function countermainas() {
//     num--;
//     count.innerText = num;
// }


// Q6

// const form = document.getElementById('signupForm');

// if(form){
//   form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (!form.checkValidity()) {
//       e.stopPropagation();
//       form.classList.add('was-validated');
//       return;
//     }

//     const data = new FormData(form);
//     const formObj = {
//       firstname: data.get('firstname'),
//       lastname: data.get('lastname'),
//       email: data.get('email'),
//       password: data.get('password'),
//       city: data.get('city'),
//       terms: data.get('terms') ? 'Agreed' : 'Not Agreed'
//     }

//     localStorage.setItem('formData', JSON.stringify(formObj));
//     window.location.href = 'data_save.html';
//   });
// }

// const savedata = localStorage.getItem('formData');
// const showDiv = document.getElementById('showData');

// if(savedata && showDiv){
//    const formObj = JSON.parse(savedata);

//    showDiv.innerHTML = `
//       <p><strong>First Name:</strong> ${formObj.firstname}</p>
//       <p><strong>Last Name:</strong> ${formObj.lastname}</p>
//       <p><strong>Email:</strong> ${formObj.email}</p>
//       <p><strong>Password:</strong> ${formObj.password}</p>
//       <p><strong>City:</strong> ${formObj.city}</p>
//       <p><strong>Terms:</strong> ${formObj.terms}</p>
//    `;
// }




// Q7

function togglertext() {
   var text = document.getElementById("moreText");
   var btn = document.getElementById("toggleButton");

   if(text.style.display === "none") {
      text.style.display = "block";
      btn.innerHTML = "Read Less";
   } else {
      text.style.display = "none";
      btn.innerHTML = "Read More";
   }
} 