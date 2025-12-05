let islamiyat = 98;
let urdu = 74;
let math = 53;
let science = 83;
let computer = 94;
let english = 77;

let totalMarks = 600;
let obtainedMarks = islamiyat + urdu + math + science + computer + english;

let percentage = (obtainedMarks / totalMarks) * 100;


let Grade = 
    percentage >= 80 && percentage <= 100 ? "A+" :
    percentage >= 70 && percentage <= 80 ? "A" :
    percentage >= 60 && percentage <= 70 ? "B" :
    percentage >= 50 && percentage <= 60 ? "C" : 
    percentage >= 40 && percentage <= 50 ? "D" :
     "Fail Try again!";

     console.log(Grade);
     

     document.write(`
    <h2>Student Marksheet</h2>
    <p><b>Islamiyat:</b> ${islamiyat}</p>
    <p><b>Urdu:</b> ${urdu}</p>
    <p><b>English:</b> ${english}</p>
    <p><b>Math:</b> ${math}</p>
    <p><b>Computer:</b> ${computer}</p>
    <p><b>Science:</b> ${science}</p>
    <hr>
    <p><b>Total Marks:</b> ${totalMarks}</p>
    <p><b>Obtained Marks:</b> ${obtainedMarks}</p>
    <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
    <p><b>Grade:</b> ${Grade}</p>
`);
// console.log(percentage);
