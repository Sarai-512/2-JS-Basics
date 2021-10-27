
/* 
JS pt 1
-----LECTURE: Values and Variables-----
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console


//1.
const country = 'USA';
const continent = 'North America';
const population = 332915073 ;
//2.
console.log(country,continent,population);

-----LECTURE: Data Types-----
1.Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the consol


//1.
const isIsland = false;
const language = ' ';

//2. 
const country = 'USA';
const continent = 'North America';
const population = 332915073 ;

console.log(typeof isIsland, typeof language, typeof country, typeof continent, typeof population);


-----LECTURE: let, const and var-----
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)

2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.

3. Try to change one of the changed variables now, and observe what happens



const language = 'English';

let language = 'English';

-----LECTURE: Basic Operators-----
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese


// const language = ' ';
const country = 'USA';
const continent = 'North America';
const population = 332915073 ;

const language = 'English';
const isIsland = false;
const finlandPop = 6000000;
const countryAverage = 33000000;

//1. My answer
const countrySplit = (population/4);
console.log(countrySplit);
// Given answer
console.log(population/2);

//2. My answer
console.log(population + 1)
// Given answer
population++;

//3. My answer
console.log(population > finlandPop );
// Given answer
console.log(population>6);

//4. My answer
console.log(population > countryAverage);
// Given answer
console.log(population< 33);

//5. My answer === good

let description = `${country} is in ${continent} and its ${population} million people speak ${language}`;

console.log(description);

-----LECTURE: Strings and Template Literals-----
1. Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax


let description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

-----LECTURE: Taking Decisions: if / else Statements------
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. [Otherwise], log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original


const country = 'USA';
const continent = 'North America';
const population = 332915073 ;

const language = 'English';
const isIsland = false;
const finlandPop = 6000000;
const countryAverage = 33000000;

if (population > countryAverage) {
    console.log('usa population is above average')
}else {
    console.log(`usas  population is ${population - countryAverage} below average`);
}

-----LECTURE: Type Conversion and Coercion-----
1. Predict the result of these 5 operations without executing them:
'9' - '5'; // 95 because they both stings
'19' - '13' + '17'; 191317 95 because they both stings
'19' - '13' + 17; 1913 + 17
'123' < 57; false boolean
5 + 6 + '4' + 9 - 4 - 2; 4  14 
2. Execute the operations to check if you were right


console.log('9' - '5'); //wronge
console.log('19' - '13' + '17'); //wronge
console.log('19' - '13' + 17); //wronge
console.log('123' < 57); //right
console.log(5 + 6 + '4' + 9 - 4 - 2); //wronge

-----LECTURE: Equality Operators: == vs. === -----
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');

2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)

3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1

4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)

5. Test the code with different values of 'numNeighbours', including 1 and 0.

6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?

7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1

8. Reflect on why we should use the === operator and type conversion in this 
situation

const numNeighbours = Number(prompt('How many neighbour countries does your countryhave?'));
 console.log(numNeighbours);

 if (numNeighbours == 1) { 
     console.log('Only 1 border!'); 
 } else  (numNeighbours === 1 )  // should be  else if (numNeighbours > 1) but could have been changed to see the diff { 
     console.log('More than 1 border');
 } else (numNeighbours === 0) // this is not needed because itll be the last option basic {
    console.log('No borders');
 }



 -----LECTURE: Logical Operators-----
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D


const country = usa;
const countryPop= 10000;
const countryLang= 'english';
const island = false;

if (countryPop <= 50000000 && countryLang === 'English' && !island) {
    console.log('this is your country')
}else {
    console.log( )
}

-----LECTURE: The switch Statement-----
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'



-----LECTURE: The Conditional (Ternary) Operator-----
1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to origina

----JS pt 2-----

------LECTURE: Iteration: The for Loop------
1. There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently voting

for (let voter = 1; voter<=50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

*/

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console

//num 1 my answer 
const describeCountry = function (country,population,capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`)

};
//num 2 my answer
describeCountry('Usa', 329 ,'Washington DC');
describeCountry('Australia', 26 , 'Canberra');
describeCountry('Japan',126, 'Tokyo');

---- Function Declarations vs. Expressions----

//num 1 & 2 my answer
//decleration
function percentageOfWorld1 (population){
    return (population/ 7900) * 100 ;
}

console.log(percentageOfWorld1(329));
//numb 3 my answer
const population1 = percentageOfWorld1(239);
const population2 = percentageOfWorld1(26);
const population3 = percentageOfWorld1(126);
console.log(population1,population2,population3);

//num 4 my answer
//expression
const describeCountry = function ( population){
    return (population/ 7900) * 100 ;
}

//----Arrow Functions----
*/
