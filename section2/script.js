/******************************** 
 Varaiables and data types
 
 var firstName = "John";
 console.log(firstName);

 
 var lastName = "Smith";
 var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Varibale naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;





 Variable mutation and type coercion


var 


  Bacsic operators 
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;
// Math operators
var yearJohn = now - 28;
var yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x); 

// Operator precedene

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
// all the same
x = x + 1;
x += 1;
x--;
console.log(x); 

// challenge 1

var heightJohn, massJohn, heightMark, massMark;
heightJohn = 1.5;
massJohn = 68;
heightMark = 1.6;
massMark = 77;

var bmiJohn = massJohn / (heightJohn * 2); //68/1.5*2=
console.log(bmiJohn);

var bmiMark = massMark / (heightMark * 2);
console.log(bmiMark);

var bmiMore = bmiJohn > bmiMark;
console.log("Is John's BMI higher then Marks?  " + bmiMore);

//If / else statments

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon:)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon:)");
}

var heightJohn, massJohn, heightMark, massMark;
heightJohn = 1.5;
massJohn = 68;
heightMark = 1.6;
massMark = 77;

var bmiJohn = massJohn / (heightJohn * 2); //68/1.5*2=
console.log(bmiJohn);

var bmiMark = massMark / (heightMark * 2);
console.log(bmiMark);

if (bmiJohn > bmiMark) {
  console.log("John's BMI is greater than Mark's");
} else {
  console.log("Mark's BMI is greater than John's");
}

 var bmiMore = bmiJohn > bmiMark;
console.log("Is John's BMI higher then Marks?  " + bmiMore); 

//Boolean logic
var firstName = "John";
var age = 16;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) { 
  console.log(firstName + " is a teenager.");
} else if (age >=20 && age < 30);{
    console.log(firstName + 'is a young man.');  
} else {
  console.log(firstName + " is a man.");
}

// The ternary(conditional) Operator and Switch Statments

var firstName = "John";
var age = 19;

age >= 18
  ? console.log(firstName + " drinks beer")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}
// all mean the same ternanry ^
//switch statments
var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;
  case "desiger":
    console.log(firstName + "  designs beautiful websites.");
    break;
  default:
    console.log(firstName + " does something eles");
}

var firstName = "John";
var age = 16;

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + "is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}

// Turthy and Falsy values and equality operators
// falsy values: undefined , null, 0 ,'', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
  console.log("Variable is definied");
} else {
  console.log("Variable has NOT been defined");
}

//Equality operators
if (height === "23") {
  console.log("The == operators does type coercion!");
}

//--------------what I did
var oneJohn,
  twoJohn,
  threeJohn,
  oneMike,
  twoMike,
  threeMike,
  oneMary,
  twoMary,
  threeMary;

oneJohn = 89;
twoJohn = 120;
threeJohn = 103;
oneMike = 116;
twoMike = 94;
threeMike = 123;
oneMary = 97;
twoMary = 134;
threeMary = 105;

var johnAverage = (oneJohn + twoJohn + threeJohn) / 3;
console.log(johnAverage);

var mikeAverage = (oneMike + twoMike + threeMike) / 3;
console.log(mikeAverage);

var marryAverage = (oneMary + twoMary + threeMary) / 3;
console.log(marryAverage);

johnAverage > mikeAverage
  ? console.log(johnAverage + " Johnes team wins")
  : console.log(mikeAverage + " Mikes team wins");
 if else if else for a draw^ doesnt include draw

switch (true) {
  case johnAverage < mikeAverage:
    console.log(johnAverage + " john wins.");
    break;
  case johnAverage > mikeAverage && marryAverage < johnAverage:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + "is a young man.");
    break;
}
//his solution
if (johnAverage > mikeAverage && johnAverage > marryAverage) {
  console.log("John's team wins with" + johnAverage + "points");
} else if (mikeAverage > johnAverage && mikeAverage > marryAverage) {
  console.log("Mike's team wins with" + mikeAverage + "points");
} else marryAverage > johnAverage && marryAverage > mikeAverage;
{
  console.log("Mary's team wins with " + marryAverage + " points");
} else {
  console.log('There is a draw')
}

//Functions

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);
//dont repeat yourself DRY
//functions call other functions
function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years");
  } else console.log(firstName + " is already retired");
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");
*/
//Function Statements and Expressions
//function declaration
// function whatDoYouDo(job,firstName){

// }

//function expression
var wahtDoYouDo = function (job, firstName) {};
switch (job) {
  case "teacher":
    return firstName + " teaches kids how to code";
  case "driver":
    return firstName + "drives a cab in Lisbon";
  case "designer":
    return firstName + " designs beasutiful websites";
  default:
    return firstName + "does something else";
}
