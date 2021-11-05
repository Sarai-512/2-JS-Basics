'use strict'; /*

 //Default Parameters
const bookings = [];

const creatBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //ES 5 way 
    // numPassengers = numPassengers || 1;
    // price = price ||199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking('LH123', 2);
creatBooking('LH123', 5);

creatBooking('LH123', undefined, 10000);

//-----How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
    name: 'jonas Schedtmann',
    passport:1938749
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 1938749) {
      alert('Checked in');
    } else {
      alert('Wrong passport!');
    }
  };

//   checkIn(flight, jonas);
//   console.log(flight);
//   console.log(jonas);

  //Is the same as doing...
//   const flightNum = flight;
//   const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

  

//[-------Functions Accepting Callback Functions------]
//functions that accept functions as input

const oneWord = function(str){
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWrod = function(str){
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join( ' '); 
};

//higher-order function
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformedby: ${fn.name}`)
}

transformer('Javascript is the best!', upperFirstWrod);

transformer('Javascript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('emjoi');
};

document.body.addEventListener('click', emjoi);
['Jonas', 'Martha', 'Adam'].forEach(high5);

//[-------Functions Returning Functions-----------]

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//greeterHey becomes a function
const greeterHey = greet('Hey');
greeterHey('Jonas');   //Hey Jonas
greeterHey('Steven');  //Hey Steven

greet('Hello')('Jonas');

// Challenge make the function into arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');

 //[-------The call and apply Methods------] */
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// Does NOT work
//is no longer a method is now a function a regular function allnow the this key word will now be undefined how to do we fix this ?
// book(23, 'Sarah Williams');

//---- Call method----
// functions are really like an objects so functions can also have methods  
//the first argument is what we want the this key word to point too
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
//an other example
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');


// ---Apply method---
// apply does not recive a list of arguments but insteads it will take an array have a better way --- use the spread operator 
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//this is the same as the above
book.call(swiss, ...flightData);

//The bind Method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

Coding Challenge #1


Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀