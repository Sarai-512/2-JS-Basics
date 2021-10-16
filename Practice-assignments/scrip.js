
/* 
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

//1. 
const countrySplit = (population/4);
console.log(countrySplit);
//2.
console.log(population + 1)

//3.

console.log(population > finlandPop );

//4.

console.log(population > countryAverage);

//5.

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
*/

// const numNeighbours = Number(prompt('How many neighbour countries does your countryhave?'));
// console.log(numNeighbours);

// if (numNeighbours == 1) { 
//     console.log('Only 1 border!'); 
// } else  (numNeighbours ===1 ) { 
//     console.log('More than 1 border');
// } else (numNeighbours === 0) {
    console.log('No borders');

// }