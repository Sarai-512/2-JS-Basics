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

*/