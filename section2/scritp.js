/*
Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);


--- Values and Variables ---
console.log('Sarah');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

Variable name conventions 
let jonas_matilda = 'JM';
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(jonas_matilda);


--- Data Types --- 
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null); 



--- let, const and var --- 
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName); 


--- Basic Operators ---
--- Math operators ---   
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 ( 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2) 

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


--- Assignment operators ---  
let x = 10 + 5; (15)
x += 10; x = x + 10 = 25
x *= 4;  x = x * 4 = 100
x++;  x = x + 1
x--;
x--;
console.log(x);

--- Comparison Operators--- 
console.log(ageJonas > ageSarah); 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


---Operator Precedence--- 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2; 
console.log(ageJonas, ageSarah, averageAge); 



Coding Challenge #1


Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.  

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

let marksBmi = massMark  / heightMark ** 2;

const BMIMark = massMark / heightMark ** 2;

const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

---Strings and Template Literals--- 
const firstName = 'Raelle';
const job = "fixer";
const birthYear = "2003";
const year = 2021;

const raelle = "She's " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(raelle);

const raelleNew = `She's ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(raelleNew);

console.log(`Just a regular string blood blood blood ...`);
console.log('Start of something \n\
new \n\
ha ha ha ');

console.log(`String
multiple
lines`);

---Taking Decision: if / else Statements----  


const age =12;
if (age >= 18) {
  console.log('Raell is concripted to the military');
} else {
  const yearsLeft = 18 - age;
  console.log(`Realle is too young and must wait an other ${yearsLeft} years :)`);
}

if(){

}else {

}

const birthYear = 1997;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

--- Coding Challenge #2---
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 

const massRaelle = 95;
const heightRaelle = 1.88;
const massScylla = 85;
const heightScylla = 1.76;

const BMIraelle = massRaelle  / heightRaelle ** 2;

const BMIscylla = massScylla / heightScylla ** 2;

console.log(BMIraelle, BMIscylla,);


if (BMIraelle >= BMIscylla) {
  console.log('raelles bmi is higher');
} else {
  const bmiLess = BMIraelle - BMIscylla;
  console.log(`Raelles bmi is less then scyllas by ${bmiLess}:)`);
}

--- Type Conversion and Coercion
---type conversion--- 
const inputYear = "1997";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

---type coercion --- 
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');
let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

--- Truthy and Falsy Values ---
-- 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 200;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
---Equality Operators---
---use strict--- 
const age = "18";
if (age === 18)  
console.log('You just became an adult :D (strict)');

if (age == 18) 
console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite numvber?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {    // "23" === 23 -> FALSE 
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

---Logical Operators--- 
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision){
  console.log('Ashly nicole williams is able to drive!');
}else{
  console.log('taylor should drive');
}

const isTired = false; // C
console.log(hasGoodVision && hasDriversLicense && isTired)

if(hasDriversLicense && hasGoodVision && !isTired){
  console.log('Ashly nicole williams is able to drive!');
}else {
  console.log('taylor should drive');
}


---Coding Challenge #3---
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below [DONE]

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).[DONE]

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 [DONE]

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


const scoreDolphines = (96+108+89)/3;
console.log(scoreDolphines);

const scoreKoalas =(88+91+110)/3;
console.log(scoreKoalas);

if (scoreKoalas > scoreDolphines){
  console.log('Koalas won');
}else if (scoreKoalas < scoreDolphines){
  console.log('Dolphines won');
}else if (scoreKoalas === scoreDolphines){
  console.log('Its a draw!')
}

if (scoreKoalas > scoreDolphines && scoreKoalas >= 100){
  console.log('Koalas won');
}else if (scoreKoalas < scoreDolphines && scoreDolphines >= 100 ){
  console.log('Dolphines won');
}else if (scoreKoalas === scoreDolphines &&  scoreKoalas> 99 && scoreDolphines >= 100){
  console.log('Its a draw!');
}else {
  console.log('no one wins');
}
---The switch Statement--- 

const day ='monday';

switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday': 
    console.log('Prepare theroy videos');
    break
    case 'wednesday':
    case 'thursday':
      console.log('Write code examples');
      break;
    case 'friday':
      console.log('Record videos');
      break;
    case 'saturday':
    case 'sunday':
      console.log('Enjoy the weekend :D');
      break;
    default:
      console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
---Statements and Expressions---
3 + 4
1997
ture && false && !false

if (23 > 10){
  const str ='23 is bigger';
}

const me = 'bird';
console.log(`I'm ${2021 - 1997} years old ${me}`);

--- The Conditional (Ternary) Operator--- 
//in if else statement in one line of code 

const age = 23;

// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

---Coding Challenge #4---

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/