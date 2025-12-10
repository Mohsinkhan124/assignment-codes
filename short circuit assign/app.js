// Q1: Solve the below code of expressions using short circuit?

let a = 5;

// Q1

// let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";

// (4 + 5) => 9 
// 9 && abc => abc
// "abc" || false + "test" => abc
// a-- || --a => 5
// abc * 5 => NaN
// false && (++a + 1) => false
// false * end => NaN
// NaN || NaN => NaN

// final answer 
// exp1 = NaN
// a => 4


// Q2

// let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 ** true;

// ("foo" && 5 + (++a) || "bar") => 11
// 10 * 11 => 110
// (false + "test") => falsetest
// falsetest || 0 ** true => falsetest

// final answer
//  exp2 = falsetest
//  a => 6


// Q3

// let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";

//  (a-- || "start") => 5
//  5 * 4 = 20
// 3 + 20 => 23

// (--a + "value") => "3value"
// (1 + 2) => 3
// "3value" * 3 => NaN
// 23 && NaN => NaN
// NaN + result => "NaNresult"


// final answer
//  exp3 = NaNresult
//  a => 3;


// Q4

// let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;

// (++a + true) => 7
// "hello" * 7 => NaN

// (2 + 3 * "abc") => NaN
// NaN || NaN => NaN
// (0 + 1) => 1
// NaN * 1 => NaN
// NaN + "xyz" => "NaNxyz"
//  "NaNxyz" && 0 => 0

// final answer
// exp4 = 0
// a => 5


// Q5

// let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;

// (true || (0 + 1) * "test" && 4) => true
// true || (false && 3 + "value") * a-- + 2 => true

// final answer
// exp5 => true



// Q6

// let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;

// ++a + "abc" => "6abc"
// "6abc"  && (4 * 2) + 3 => 11
// baqi ko skip kardia 

// final answer
// exp6 => 11



// Q7

// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";

// ("foo" + 5) => "foo5"
// "foo5" * (++a + true) => NaN

// NaN || 2 * 3 + (true + 2) => 9
// 9 || "result" => 9

// final answer 
// exp7 => 9



// Q8

// let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";

// (0 + 1) && (true + 0) => 1
// aagey ki coding ko skip kardia

// final answer 
// exp8 => 1


// Q9

// let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 +"result") || null;

//  3 * "abc" => NaN
// NaN + (true + 1 => NaN

// NaN || (++a + "test") => "6test"
// "6test" && (3 +"result") => "3result"

// final answer
// exp9 => "3results"


// Q10

// let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;

//  (++a + false) => 6
// 6 && "start" => "start"

// final answer 
// exp10 => "start"



// Q11

// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;

// (false && "hello") => falase
// (a++ || 3 + "test") => 5
// false + 5 * 4 => 20

// 20 || 5 * "abc" && 0 => 20

// final answer
// exp11 => 20

 

// Q12

// let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";

// "hello" * (true + 0) + 2 => NaN
// NaN || (false + 1) * 3 => 9
// 9  && "result" => "result"
// "result" || 4 + "test" => "result"


// final answer
// exp12 => "result"



// Q13

// let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;

// (a++ || false) => 5
// 5 * 5 + 2 => 27

// 27 && (false + "test") => "falsetest"

// final answer 
// exp13 => "falsetest"



// Q14

// let exp14 = (false + "abc") * 2 || (--a + 1) * "abc" + 3 && 4 || "end";

// (false + "abc") * 2 => NaN
// NaN || (--a + 1) * "abc" + 3  => NaN
// NaN && 4 => NaN
// NaN || "end" => "end"

// final answer 
// exp14 => "end"



// Q15

// let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;

// (0 + "foo") * 3 => NaN
// NaN + (true && "result") => "NaNresult"
// "NaNresult" || "start" + (++a + 1) * 4 => "NaNresult"

// final answer
// exp15 => "NaNresult"


// Q16

// let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;

// 2 * "end" => Nan
// (false && true) => false
// NaN || false => false

// "start" + (--a + 2) * 5 => "start30"
// false || "start30" => "start30"
// "start30" && null => null

// final answer
// exp16 => null


// Q17

// let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;

//  3 + 2 * ("test" + a--) => NaN
// NaN && (false + 3) * 5 => NaN
// NaN || 0 + "value" && 4 => 4

// final answer
// exp17 => 4


// Q18

// let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;

//  "start" && (false || 2 * "end") => NaN
// NaN || (++a + 1) * 3 + "result" => "21result"
// "21result" && 0 => 0

// final answer
// exp18 => 0



// Q19

// let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;

// ((5 + 1) && "foo") => "foo"
// "foo" || (++a + 2) * (false + 3) + "test" && 7 => "foo"

// finale answer
// exp19 => "foo"


// Q20

// let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;

// 2 * 3 + "hello" => "6hello"
// "6hello" && (false + ++a) * "result" => NaN
// NaN || "end" + 5 => "end5"
// "end5" || 0 => "end5"

// final answer
// exp20 => "end5"